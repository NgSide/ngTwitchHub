import { Component, Input, OnInit } from '@angular/core';
import { TwitchService } from '../services/twitch-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() viewers: number = 42;
  @Input() thumbnail: string = '';
  @Input() streamTitle: string = 'Bonjour Hi!';
  @Input() broadcasterName: string = 'AlphaCat Coolcat';
  @Input() streamCategoryName: string = 'Age of Empires IV';
  @Input() streamTags: string[] = ['French', 'RTS'];
  @Input() url: string ='';

  constructor(private twitchService: TwitchService) { }

  ngOnInit(): void {
  }

}
