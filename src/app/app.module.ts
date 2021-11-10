import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamThumbnailComponent } from './stream-thumbnail/stream-thumbnail.component';
import { StreamCardComponent } from './stream-card/stream-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamThumbnailComponent,
    StreamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
