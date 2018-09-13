import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  url: any = 'http://localhost:3000/api/usuario/';

  constructor(public http: HttpClient) {
  }

  public get(endpoint, data) {
    return new Promise((resolve, reject) => {
        this.http.get(this.url + endpoint + data)
        .subscribe(function(registros) {
            resolve(registros);
            }, (error) => {
                reject(error);
            }
        );
    });
  }

  public post(endpoint, data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.url + endpoint, data)
        .subscribe(function(registros) {
            resolve(registros);
            }, (error) => {
                reject(error);
            }
        );
    });
  }

}
