import { Component, OnInit, VERSION } from '@angular/core';
import { map } from 'rxjs/operators';
import { StreamModel } from './models/stream.model';
import { TwitchService } from './services/twitch.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Kevin Mrl- Angular ' + VERSION.major;

streams: StreamModel[];

  constructor(private readonly twitchService: TwitchService) {

  }

  ngOnInit() {
    
      //utiliser map
    this.twitchService.getHelixStreams().subscribe((streams: any) => {
      this.streams = streams;
      console.log(this.streams);
    });
  }

  getImg(item) {
    const lastIndexOfTiret = item.thumbnail_url.lastIndexOf('-');
    const lastIndexOfPoint = item.thumbnail_url.lastIndexOf('.');
    let url = item.thumbnail_url.substring(0, lastIndexOfTiret) + item.thumbnail_url.substring(lastIndexOfPoint);
    return url;
  }
  
}
