import { Injectable, EventEmitter } from '@angular/core';
import { ProductModel } from "../../products/models";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  add(product: ProductModel){
    this.addProduct.emit(product);
  }
  
}
