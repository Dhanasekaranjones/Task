import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrl: './detailview.component.css'
})
export class DetailviewComponent implements OnInit{
  detailItem: any[] = [];
  constructor(private cartService: CartService,private router:Router){}
  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.detailItem = items;
      console.log('this.detailItem ',this.detailItem);
      
    });
  }
  goBack(){
    this.router.navigate(['list']);
  }
}
