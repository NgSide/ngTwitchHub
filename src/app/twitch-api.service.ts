import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from './models/live.model';
import { HttpClient } from '@angular/common/http';

const STREAM_LIST = 'https://api.twitch.tv/helix/streams';
const BEARER_AUTH = 'Authorization: Bearer nia7lttt8bnbe14u2qgb7jpftmniva';
const CLIENT_ID = 'Client-Id: ux0wlqbi147fhhv3nkn8ay5cuf2ui3'

@Injectable()
export class TwitchApiService {
  currentLivesList$: Observable<Live[]>;

  constructor(private http: HttpClient) {}

  getCurrentLivesList() {
    return this.http.get<Live[]>(STREAM_LIST);
  }
}
 