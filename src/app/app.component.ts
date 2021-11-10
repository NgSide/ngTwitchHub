import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
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
findStreams$: Observable<StreamModel[]>;
  constructor(private readonly twitchService: TwitchService) {

  }

  ngOnInit() {
    
    this.findStreams$ = this.twitchService.getHelixStreams();
      //utiliser map
    //this.twitchService.getHelixStreams().subscribe((streams: any) => {
      //this.streams = streams;
      //console.log(this.streams);
    //});
  }

  getImg(item) {
    const lastIndexOfTiret = item.thumbnail_url.lastIndexOf('-');
    const lastIndexOfPoint = item.thumbnail_url.lastIndexOf('.');
    let url = item.thumbnail_url.substring(0, lastIndexOfTiret) + item.thumbnail_url.substring(lastIndexOfPoint);
    return url;
  }
  
  getImgProfil(item) {
    const lastIndexOfTiret = item.streamer.profile_image_url.lastIndexOf('-');
    const lastIndexOfPoint = item.streamer.profile_image_url.lastIndexOf('.');
    let url = item.streamer.profile_image_url.substring(0, lastIndexOfTiret) + item.streamer.profile_image_url.substring(lastIndexOfPoint);
    return url;
  }
}
