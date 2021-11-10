
 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
 @Injectable()
 export class Api {
   API_URL = '';
   BddSelected: number;
 
   constructor(
     private http: HttpClient
   ) {
   }
 
   get header() {
     return {
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       params: {}
     };
   }
 
   get<T>(route: string, header?: {}, params?: {}): Observable<T> {
     this.API_URL = route;
     let h = { headers: {}, params: {} };
     header ? (h.headers = { ...header}) : (h = this.header);
     h.params = params;
     return this.http.get<T>(`${this.API_URL}`, h);
   }
 }
 