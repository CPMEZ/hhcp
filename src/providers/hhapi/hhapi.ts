import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HHAPI {
    constructor(private http: HttpClient) {
        console.log('Constructor HHAPI Provider');
    }

    apiURL = 'http://api.cpmez.com:33000/HomeHealth/';
    // local apiURL = 'http://127.0.0.1:33000/HomeHealth/';
    // apiURL = 'http://127.0.0.1:33000/HomeHealth/';

    MASTER_KEY = "Half a league, half a league, Half a league onward,"
    // first 2 lines of charge of the light brigade

    getData(type: string): Promise<string> {
        console.log('getData', type);
        return new Promise((resolve, reject) => {
            this.http.get(type)
                .timeout(7100)
                .subscribe(
                    (data) => resolve(JSON.stringify(data)),
                    (err) => reject(err));
        });
    }

}
