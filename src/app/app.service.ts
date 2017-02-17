import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from "./Album";
import {ALBUMS} from "./mock-albums";
import {Band} from "./Band";
import {BANDS} from "./mock-bands";
import {User} from "./User";
import {USERS} from "./mock-users";

@Injectable()
export class AppService {

  constructor(private _http:Http) { }

  getUsers(): Promise<User[]>{
    return Promise.resolve(USERS);
  }

  getBands(): Promise<Band[]>{
    return Promise.resolve(BANDS);
  }

  getAlbums(): Promise<Album[]>{
    return Promise.resolve(ALBUMS);
  }

}
