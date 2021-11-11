import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-thumbnail',
  templateUrl: './stream-thumbnail.component.html',
  styleUrls: ['./stream-thumbnail.component.scss']
})
export class StreamThumbnailComponent implements OnInit {

  @Input() viewers: number = 0;
  @Input() url: string = 'https://static-cdn.jtvnw.net/previews-ttv/live_user_mizkif-440x248.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
