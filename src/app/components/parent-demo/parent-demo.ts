import { Component, OnChanges, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a: number;
  parent_topicName: string = '';
  numArr = [10, 20, 30, 40];

  @ViewChild('myBox1') myBox1: any;

  test() {
    console.log('Test....');
  }

  receiveData(topicName: string) {
    this.parent_topicName = topicName;
  }
  myTimerId: number;
  constructor() {
    console.log('Parent constructor');
    this.a = 100;
    console.log(this.myBox1);
    this.myTimerId = setInterval(() => {
      console.log('I am Interval');
    }, 1000);
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myBox1);
    this.myBox1.nativeElement.focus();
    this.myBox1.nativeElement.style.backgroundColor = 'lightgreen';
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
    clearInterval(this.myTimerId);
  }
}
