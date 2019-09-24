import { AuthenticationProvider } from '../authentication/authentication';
import { Injectable } from '@angular/core';
import { LocalStoreProvider } from '../local-store/local-store';

import CryptoJS from 'crypto-js';

// cache uses passed-in key for encryption

@Injectable()
export class CacheProvider {
  // secret: string;
  // storeKey: string;

  constructor(
    private LSP: LocalStoreProvider,
    public auth: AuthenticationProvider) {
    console.log('Constructor Cache Provider');
  }

  checkRecent(): boolean {
    // if cached more than ? ago, refresh
    return true;
  }

  remove(type) {
    console.log('removing from cache', type);
    this.LSP.remove(type);
  }

  clearCache() {
    console.log('clearing cache');
    this.LSP.keys()
      .then((k: any) => {
        for (const t in k) {
          if (k.hasOwnProperty(t)) {
            // remove everything except session and plans
            if (k[t] !== "cp_session"
              && k[t] !== "plans") {
                console.log('clearing ', k[t]);
              this.LSP.remove(k[t]);
            } else {
              console.log('not clearing ', k[t]);
            }
          }
        }
      });
  }

  write(type: string, eKey: string, input: string ) {
    console.log('caching ' + type);
    let p = this.encrypt(this.package(type, input), eKey);
    this.LSP.set(type, p)
      .then(result => console.log("saved to cache"))
      .catch(e => console.log("error: " + e));
  }


  read(type: string, eKey: string, filter?: string): Promise<string> {
    console.log('reading cache for ' + type);
    return new Promise((resolve, reject) => {
      this.LSP.get(type)
        .then((data) => {
          if (data) {
            console.log('got cache');
            const r = this.unPackage(type, this.decrypt(data, eKey));
            // checkRecent--refresh
            if (filter) {
              const t = this.filterData(r, type, filter);
              resolve(t);
            } else {
              // console.log(r);
              resolve(r);
            }
          } else {
            console.log('not in cache');
            reject();
          }
        });
      // .catch(e => reject => console.log("error: " + e));
    })
  }

  filterData(data, type, filter) {
    // (matches code in cpapi)
    const f = filter.toLowerCase()
    console.log('filter', f)
    const t = JSON.parse(data)  // "r" from read
    var p = []
    console.log('type', type)
    t[type].forEach(i => {
      var add = false
      if (i.text) {
        if (i.text.toLowerCase().indexOf(f) >= 0) { add = true }
      }
      if (i.hint) {
        if (i.hint.toLowerCase().indexOf(f) >= 0) { add = true }
      }
      if (add) {
        p.push(i)
      }
    })
    console.log('found', p.length)
    var q = {}
    if (p.length) { q[type] = p };
    const fd = JSON.stringify(q)
    return fd
  }

  package(type: string, input: string): string {
    // { type: { cached: '1/1/1', contents: { input } } }
    let p: object = {};
    p[type] = {
      cached: Date.now().valueOf(),
      contents: input
    }
    return JSON.stringify(p);
  }

  unPackage(type: string, input: string): string {
    // strip off container and date
    // { type: { cached: '1/1/1', contents: { input } } }
    const p = JSON.parse(input);
    return p[type].contents;
  }

  encrypt(data: string, key: string): string {
    // console.log("encrypting");
    // console.log("key", key);
    return CryptoJS.AES.encrypt(data, key).toString();
  }
  
  decrypt(data: string, key: string): string {
    // console.log('decrypting');
    // console.log("key", key);
    const bytes = CryptoJS.AES.decrypt(data, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

}
