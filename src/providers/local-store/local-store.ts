import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const APP_NAME = 'hhcp';

@Injectable()
export class LocalStoreProvider {

  constructor(private storage: Storage) {
    console.log('Constructor LocalStoreProvider Provider');
  }

  set(key: string, value): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set(key + '_' + APP_NAME, value)
        .then((result) => resolve(true))
        .catch((reason) => {
          console.info(reason);
          reject(reason);
        })
    });
  }

  get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get(key + '_' + APP_NAME)
        .then(result => resolve(result))
        .catch((reason) => {
          console.info(reason);
          reject(reason);
        });
    })
  }

  remove(key: string) {
    this.storage.remove(key + '_' + APP_NAME);
  }

  clear() {
    this.storage.clear();
  }

  keys() {
    return new Promise((resolve, reject) => {
      this.storage.keys()
        .then(result => resolve(result))
        .catch((reason) => {
          console.info(reason);
          reject(reason);
        });
    })
  }

}

  // setObject(key: string, object: Object) {
  //   return this.storage.set(key, JSON.stringify(object)).then(result => {
  //     console.log("set Object in storage: " + result);
  //     return true;
  //   }).catch(function (reason) {
  //     console.info(reason);
  //     return false;
  //   });
  // }


  // getObject(key: string): Promise<any> {
  //   return this.storage.get(key).then(result => {
  //     if (result != null) { return JSON.parse(result) }
  //     return null;
  //   }).catch(function (reason) {
  //     console.info(reason);
  //     return null;
  //   });
  // }
