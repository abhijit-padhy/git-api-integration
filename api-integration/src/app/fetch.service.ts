import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  public data1: any;
  constructor( private _http: HttpClient) { }

  getUserList(_url: string){
    return this._http.get(_url);
  }
}
