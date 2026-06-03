import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  constructor(private mathService: MathService) {} // Dependency Injection

  ngOnInit() {
    console.log('Demo-1:: ')
    console.log('Sum is: ', this.mathService.sum([10, 20, 30, 40, 50]));
    console.log('Average is: ', this.mathService.average([10, 20, 30, 40, 50]));
  }
}
