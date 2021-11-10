import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiniatureVideoComponent } from './miniature-video/miniature-video.component';
import { TwitchApiService } from './twitch-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  providers: [],
  imports: [BrowserModule, FormsModule, TwitchApiService],
  declarations: [AppComponent, HelloComponent, MiniatureVideoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
