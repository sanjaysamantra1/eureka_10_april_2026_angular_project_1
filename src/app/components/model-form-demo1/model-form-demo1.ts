import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-form-demo1',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-form-demo1.html',
  styleUrl: './model-form-demo1.css',
})
export class ModelFormDemo1 {
  registerForm;

  constructor(private formBuilder: FormBuilder) {
    // Model Form using FormGroup
    /* this.registerForm = new FormGroup({
      firstName: new FormControl('sanjay',[Validators.required,Validators.minLength(5)]),
      lastName: new FormControl('samantra'),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
    },{updateOn:'blur'}); */

    // Model Form using FormGroup
    this.registerForm = this.formBuilder.group({
      firstName: ['sanjay', [Validators.required, Validators.minLength(5)]],
      lastName: ['samantra', [Validators.required, Validators.minLength(5)]],
      email: ['sanjay@gmail.com', [Validators.required, Validators.minLength(5)]],
      address: this.formBuilder.group({
        city: [],
        state: [],
        pincode: [],
      }),
    });
  }
}
