import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  courseName: string = 'Angular';
  img_url: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s';
  flag: boolean = true;

  num1: number = 10;
  num2: number = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }

  addResult: number = 0;
  addition(val1: string, val2: string) {
    this.addResult = Number(val1) + Number(val2);
  }

  max_length = 10;
  
}
