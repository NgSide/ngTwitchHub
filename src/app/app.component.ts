import { Observable } from 'rxjs';
import { TwitchService } from './services/twitch-api.service';
import { Component } from '@angular/core';
import { OneStream } from './models/modelStream';
import { Confirmation } from './method.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {

  public findStreams$: Observable<OneStream[]>;

  constructor(private twitchService: TwitchService){
    this.findStreams$ = this.twitchService.getTwitch('https://api.twitch.tv/helix/streams');
  }

  ngOnInit(): void {
  }

  @Confirmation('Envoyer vos données dans le cloud?')
  @Confirmation('Vraiment sur ?')
  submitForm() {
    console.log('Formulaire envoyé');
  }
 
}
