import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  dataArray!: any[];
  myForm!: FormGroup;
  cartItemCount: number = 0;
  constructor(private route: Router, private cartService: CartService) { }
  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('List') as any);
    this.dataArray = data || [];
    console.log(this.dataArray);
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }
  gotoAdd() {
    this.route.navigate(['addEdit']);
  }

  editItem(id: number) {
    this.route.navigate(['/addEdit', id]);
  }
  goToCart() {
    this.route.navigate(['cartPage']);
  }

  addToCart(item: any) {
    if (!this.cartService.isItemInCart(item)) {
      this.cartService.addItem(item);
    } else {
      alert('Item is already in the cart.');
    }
  }
  // getDetailCart(item: any) {
  //   console.log('item',item);
    
  //   this.route.navigate(['/details', item]);
  //   this.cartService.getCartDetails(item);
  // }
}
