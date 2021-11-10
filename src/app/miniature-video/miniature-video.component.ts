import { Component, OnInit } from '@angular/core';
import { Live } from 'app/models/live.model';
import { TwitchApiService } from 'app/twitch-api.service';

@Component({
  selector: 'app-miniature-video',
  templateUrl: './miniature-video.component.html',
  styleUrls: ['./miniature-video.component.css']
})
export class MiniatureVideoComponent implements OnInit {

  currentLivesList$: Live[];

  constructor(private _twitchAPIService: TwitchApiService) { }

  ngOnInit() {
    this._twitchAPIService.getCurrentLivesList().subscribe((data: Live[]) => this.currentLivesList$ = { ...data });;

    console.log(this._twitchAPIService.currentLivesList$)
  }

}