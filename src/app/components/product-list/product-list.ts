import { Component } from '@angular/core';
import productData from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';
import { CharOnly } from '../../custom_directives/char-only';
import { Disablepaste } from '../../custom_directives/disablepaste';
import { Zoomin } from '../../custom_directives/zoomin';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    CharOnly,
    Disablepaste,
    Zoomin,
    RouterLink
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;

  performSearch(event: any) {
    const searchText = event.target.value;
    this.productArr = productData.filter((product) => {
      return JSON.stringify(product).includes(searchText);
    });
  }

  p: number = 1;
  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }

  openSweetAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackBar() {
    new Snackbar('Helloooo, Good Morning', {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
  }
}
