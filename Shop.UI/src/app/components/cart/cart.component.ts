import { Component, OnInit } from '@angular/core';
import { ProductModel } from "../../models";
import { CartService } from "../../services/";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsToBuy: ProductModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.addProduct.subscribe((pr) => {
        this.productsToBuy.push(pr);
    });
  }

  clear(){
    this.productsToBuy = [];
  }
}
