import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {User} from "../User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(private appService: AppService) { }

  getUsers(): void {
    this.appService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
