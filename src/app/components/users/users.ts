import { Component } from '@angular/core';
import * as data from './user_data.json';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userArr = (data as any).default;
}
