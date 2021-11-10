import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  constructor(private http: HttpClient) { }

  getTwitch(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }
}
