import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  // getStreams(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva',
  //     'Client-Id': 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3',
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   });
  //   return this.http.get('https://api.twitch.tv/helix/streams', {
  //     headers: headers,
  //     responseType: 'blob',
  //   });
  // }
}
