import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getLocalStorage(item:any){
    return localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item') || '') : []
  }

  setLocalStorage(item:any,key:any){
   return localStorage.setItem(key,JSON.stringify(item))

  }
}
