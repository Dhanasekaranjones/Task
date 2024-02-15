import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  totalAmount: number = 0;
  total: number = 0;quantity: number = 1;
  cartItems: any[] = [];
  constructor(private cartService: CartService,private router:Router) {

  }

  ngOnInit() {
    // Subscribe to cart items observable
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
    this.calculateTotal();
  }

  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.cartService.calculateTotalAmount();
  }

  goBack(){
    this.router.navigate(['list']);
  }
}
