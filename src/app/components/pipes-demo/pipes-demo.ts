import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe,MySortPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'saChIn tEnDUlKaR';
  mySal = 5000;
  dateObj = new Date();
  user = { name: 'sanjay', role: 'trainer', address: 'Bangalore' };
  keepOriginalOrder = () => 0;
  cars = ['Tata', 'honda', 'maruti', 'hyundai', 'toyota'];
  msg = '';

  numArr = [30, 10, 50, 20, 40];
}
