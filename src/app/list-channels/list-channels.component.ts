import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.css'],
})
export class ListChannelsComponent implements OnInit {
  private _streams: [];
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.getStreamHomePage();
  }

  getStreamHomePage() {
    return this._apiService.getStreams();
  }
}
