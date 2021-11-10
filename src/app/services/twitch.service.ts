import { Injectable } from '@angular/core';
import { Api } from './api';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StreamModel } from '../models/stream.model';

@Injectable()
export class TwitchService {

  constructor(private readonly api: Api) { }

  getHelixStreams(): Observable<StreamModel> {
      return this.api.get('https://api.twitch.tv/helix/streams', { 'Authorization': 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva', 'Client-Id': 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3' }
      ).pipe(map( (a: any) => a.data));
  }

  getUser(stream: StreamModel) {
    return this.api.get('https://api.twitch.tv/helix/users?login=${user.user_login}&id=${user.user_id}', { 'Authorization': 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva', 'Client-Id': 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3' }
    );
  }
}