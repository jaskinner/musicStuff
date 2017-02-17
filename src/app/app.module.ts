import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { BandsComponent } from './bands/bands.component';

import {routing} from './app.routing';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidedrawerComponent,
    BandsComponent,
    AlbumsComponent,
    SongsComponent,
    UserHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
