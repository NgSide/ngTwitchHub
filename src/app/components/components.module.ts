import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StreamThumbnailComponent } from './stream-thumbnail/stream-thumbnail.component';
import { StreamCardComponent } from './stream-card/stream-card.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    StreamThumbnailComponent,
    StreamCardComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    StreamThumbnailComponent,
    StreamCardComponent,
    TagComponent
  ]
})
export class ComponentsModule { }
