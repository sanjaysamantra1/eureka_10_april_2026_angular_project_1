import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    RouterLink
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  httpClient = inject(HttpClient);
  user_api = 'https://jsonplaceholder.typicode.com/users';
  users: any = signal([]);

  ngOnInit() {
    this.httpClient.get(this.user_api).subscribe((response) => {
      this.users.set(response);
    });
  }
}
