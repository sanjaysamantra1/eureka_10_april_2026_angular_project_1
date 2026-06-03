import { Component } from '@angular/core';
import { MyModal } from '../my-modal/my-modal';

@Component({
  selector: 'app-footer',
  imports: [MyModal],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
