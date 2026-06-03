import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-demo1.html',
  styleUrl: './template-form-demo1.css',
})
export class TemplateFormDemo1 {
  user = {
    firstName : 'Sanjay',
    lastName : 'Samantra',
    email:'sanjay@gmail.com'
  }

  submitMyForm(formData: any) {
    console.log(formData);
  }
}
