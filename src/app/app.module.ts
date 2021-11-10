import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiniatureVideoComponent } from './miniature-video/miniature-video.component';
import { TwitchApiService } from './twitch-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  providers: [],
  imports: [BrowserModule, FormsModule, TwitchApiService, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, MiniatureVideoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
