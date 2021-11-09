import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.css'],
})
export class ListChannelsComponent implements OnInit {
  private _streams: any;

  constructor() {}

  ngOnInit() {
    // this.getStreamHomePage();
  }

  // getStreamHomePage() {
  //   this._streams = this._apiService.getStreams();
  //   console.log('this._streams');
  //   console.log(this._streams);
  //   return this._streams;
  // }

  streams() {
    return this._streams;
  }
}
