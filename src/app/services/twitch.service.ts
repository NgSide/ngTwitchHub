import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class TwitchService {

  constructor(private readonly api: Api) { }

  getHelixStreams() {
      return this.api.get('https://api.twitch.tv/helix/streams', { 'Authorization': 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva', 'Client-Id': 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3' }
      );
  }
}