import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.forkjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
  }

  forkjoin_demo() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    let api_3 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');

    forkJoin([api_1, api_2, api_3]).subscribe((responseArr) => {
      console.log(responseArr);
    });
  }

  mergeMap_demo() {
    let user_obs = of(1,2,3,4,5); // outer observable

    user_obs.pipe(mergeMap((userId)=>{  // response of outer observable
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe(finalresponse=>{
      console.log(finalresponse)
    })
  }

  concatMap_demo() {
    let user_obs = of(1,2,3,4,5); // outer observable

    user_obs.pipe(concatMap((userId)=>{  // response of outer observable
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    })).subscribe(finalresponse=>{
      console.log(finalresponse)
    })
  }
}
