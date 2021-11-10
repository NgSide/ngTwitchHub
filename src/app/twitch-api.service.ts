import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from './models/live.model';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

const STREAM_LIST = 'https://api.twitch.tv/helix/streams';
const BEARER_AUTH = 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva';
const CLIENT_ID = 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3';

@Injectable()
export class TwitchApiService {
  currentLivesList$: Observable<Live[]>;

  constructor(private http: HttpClient) {}

  getCurrentLivesList() {
    let headers = new Headers({
      Authorization: BEARER_AUTH,
      'Client-Id': CLIENT_ID,
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.get<Live[]>(STREAM_LIST, options);
  }
}
