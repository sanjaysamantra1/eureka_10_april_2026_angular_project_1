import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b','numArr'],
})
export class Child1Demo {
  a: any;
  b: any;
  numArr:any;

  async fetch_user_data() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let usersArr = await response.json();
    console.log(usersArr);
  }

  // constructor() {
  //   console.log('child constructor');
  // }
  ngOnChanges(changedData: SimpleChanges) {
    console.log('child ngOnChanges');
    console.log(changedData);
  }
  ngOnInit() {
    console.log('child ngOnInit');
    this.fetch_user_data();
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
