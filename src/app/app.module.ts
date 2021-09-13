import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArtistsModule } from './artists/artists.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ArtistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
