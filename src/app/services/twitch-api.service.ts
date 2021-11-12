import { OneStream } from './../models/modelStream';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AllStreams, Streams } from '../interfaces/interface';


// Config de l'authentification à l'API
const httpOptions = new HttpHeaders()
.set('content-type', 'application/json')
.set('Authorization', 'Bearer nia7lttt8bnbe14u2qgb7jpftmniva')
.set('Client-Id', 'ux0wlqbi147fhhv3nkn8ay5cuf2ui3');

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  constructor(private http: HttpClient) { }

  /*
   *
   * @param url
   * @returns
   * Appel de l'API Twitch pour retourner un objet OneStream
   */
  getTwitch(url: string): Observable<OneStream[]> {
    const headers = httpOptions;
    // .pipe permet l'écoute constante de l'API. l'observable reçoit auto les maj envoyés par l'API.
    return this.http.get<AllStreams>(url, {headers}).pipe(
          // AllStreams fait référence à ce que retourne l'API. Ici l'API retourne un tableau de data.
      // l'API renvoi un objet type AllStreams contenant un data et une pagination (cf https://dev.twitch.tv/docs/api/reference).
      // On utilise le 1er MAP pour ne garder que le data
      map((response: AllStreams) => response.data),
      // on utilise le 2e MAP pour formater le résultat
      map((data: Streams[]) => {
        // le dernier map est sur l'observable afin de ne garder que les champs souhaité.
        // le return fait référence au MAP ci dessus.
        return data.map((stream: Streams) => {
          const result: OneStream = {
            id: stream.id,
            title: stream.title,
            thumbnail: stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248'),
            viewers: stream.viewer_count,
            tags: [],
            userId: stream.user_id,
            userName: stream.user_name,
            categoryId: stream.game_id,
            categoryName: stream.game_name
          };
          // le return fait référence au .map
          return result;
        })
      })
    )
  }
}
