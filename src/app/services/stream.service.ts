import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindStreamData, FindStreamsResponseDto } from '../dto/find-streams-response.dto';

import { map } from 'rxjs/operators';
import { IStream } from '../models/stream.model';

const HEADERS = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva')
  .set('Client-Id', 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3');

@Injectable()
export class StreamService {
  constructor(private http: HttpClient) {}

  findStreams(): Observable<IStream[]> {
    const headers = HEADERS;
    return this.http
      .get<FindStreamsResponseDto>('https://api.twitch.tv/helix/streams', { headers })
      .pipe(
        map((response: FindStreamsResponseDto) => response.data),
        map((data: FindStreamData[]) => {
          return data.map((d: FindStreamData) => {
            const stream: IStream = {
              id: d.id,
              title: d.title,
              thumbnail: d.thumbnail_url.replace('{width}', '500').replace('{height}', '500'),
              viewers: d.viewer_count,
              tags: [],
              userId: d.user_id,
              userName: d.user_name,
              categoryId: d.game_id,
              categoryName: d.game_name
            };
            return stream;
          });
        })
      );
  }
}
