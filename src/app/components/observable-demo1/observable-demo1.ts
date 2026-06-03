import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  time$ = interval(1000).pipe(map(val=>new Date().toLocaleTimeString()));

  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let cars_obs = from(cars);
    cars_obs.subscribe((car) => console.log('Car Name: ', car));
  }

  num$ = interval(1000);
  even_num$ = this.num$.pipe(filter(val=>val%2==0));
  num_square$ = this.num$.pipe(map(val=>val * val));
  num_first5 = this.num$.pipe(take(5));

  interval_demo(){
    this.num$.subscribe(val=>console.log(val));
  }
}
