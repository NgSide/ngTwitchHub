import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../services/twitch-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private twitchService: TwitchService) { }

  ngOnInit(): void {
    this.getHeaders();
  }

  getHeaders(): void {
    this.twitchService.getTwitch('https://api.twitch.tv/helix/streams')
  }
}
