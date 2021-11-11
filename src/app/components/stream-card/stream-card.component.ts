import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent implements OnInit {

  @Input() viewers: number = 42;
  @Input() thumbnail: string = '';
  @Input() streamTitle: string = 'Bonjour Hi!';
  @Input() broadcasterName: string = 'AlphaCat Coolcat';
  @Input() streamCategoryName: string = 'Age of Empires IV';
  @Input() streamTags: string[] = ['French', 'RTS'];


  constructor() { }

  ngOnInit(): void {
  }

}
