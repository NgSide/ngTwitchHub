import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './service/api.service';
import { ListChannelsComponent } from './list-channels/list-channels.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ListChannelsComponent],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
