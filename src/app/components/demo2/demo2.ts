import { MathService } from './../../services/math-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.css',
})
export class Demo2 {
  mathService = inject(MathService);

  ngOnInit() {
    console.log('Demo-2:: ');
    console.log('Average is: ', this.mathService.average([10, 20, 30, 40, 50]));
    console.log('index of max value is: ', this.mathService.indexOfMax([10, 20, 50, 30, 40]));
  }
}
