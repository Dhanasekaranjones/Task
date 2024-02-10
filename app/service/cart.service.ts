import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  // Add item to cart
  addItem(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
      this.cartItemCount.next(this.cartItems.length);
    }
    this.cartSubject.next(this.cartItems);
  }

  //Details View
  getCartDetails(item:any){
    this.cartSubject.next(item);
  }
 // Remove item from cart
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartSubject.next(this.cartItems);
    this.cartItemCount.next(this.cartItems.length);
  }
 // Get cart items as an observable
  getCartItems(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }
   // Check if item exists in the cart
   isItemInCart(item: any): boolean {
    return this.cartItems.some(cartItem => cartItem.id === item.id);
  }

  // Increase quantity
  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
    this.cartSubject.next(this.cartItems);
  }

   // Decrease quantity
   decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartSubject.next(this.cartItems);
    }
  }

  // Calculate total amount
  calculateTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
//Get cart items count
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }
}
