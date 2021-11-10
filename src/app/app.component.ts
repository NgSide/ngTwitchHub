import { Component, OnInit, VERSION } from '@angular/core';
import { TwitchService } from './services/twitch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Kevin Mrl- Angular ' + VERSION.major;

streams: any;

  constructor(private readonly twitchService: TwitchService) {

  }

  ngOnInit() {
    this.twitchService.getHelixStreams().subscribe((streams: any) => {
      this.streams = streams.data;
      console.log(this.streams);
    });
  }

  getImg(item) {
    const lastIndexOfTiret = item.thumbnail_url.lastIndexOf('-');
    const lastIndexOfPoint = item.thumbnail_url.lastIndexOf('.');
    let url = item.thumbnail_url.substring(0, lastIndexOfTiret) + item.thumbnail_url.substring(lastIndexOfPoint);
    console.log(url);
    return url;
  }
}
