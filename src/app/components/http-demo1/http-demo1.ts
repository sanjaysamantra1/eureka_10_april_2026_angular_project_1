import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {} //Dependency Onjection

  ngOnInit() {
    // this.fetchUser_javascript();
    this.fetchUser_angular();
  }

  fetchUser_javascript() {
    // fetch() returns Promise, then() is used to read data from promise
    fetch(this.user_api).then((response) => {
      console.log(response);
      response.json().then((finalResponse) => console.log(finalResponse));
    });
  }

  fetchUser_angular() {
    // httpClient.get() returns Observable, subscribe() is used to read data from observable
    this.httpClient.get(this.user_api).subscribe((response) => console.log(response));
  }
}
