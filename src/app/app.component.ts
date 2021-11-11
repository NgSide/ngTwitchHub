import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StreamService } from './services/stream.service';

import { IStream } from './models/stream.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public findStreams$: Observable<IStream[]>;

  constructor(public streamService: StreamService) {
    this.findStreams$ = this.streamService.findStreams();
  }

  ngOnInit() {
  }
}
