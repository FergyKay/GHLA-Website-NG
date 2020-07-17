import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage: any;
  secureStorage =  localStorage;
  

  constructor() {

  }

  writeToStore(key, value) {
    return new Promise(resolve => {
      this.localStorage.set({
        key: key,
        value: value
      }).then(success => {
        resolve("Written "+key+" with value "+success)
      });
    })
  }


  getFromStore(key) {
    return new Promise(resolve => {
      this.secureStorage.get({
        key: key
      }).then(
        value => {
          resolve(value)
        }
      );
    })
  }


  removeFromStore(key) {
    return new Promise(resolve => {
      this.secureStorage.remove({
        key: key
      }).then(
        success => {
          resolve(true)
        }
      );

    })
  }

  removeAll() {
    return new Promise(resolve => {
      this.secureStorage.removeAll().then(success => resolve(true));

    })
  }
}
