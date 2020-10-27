import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from "../products/products.module";

import { CartComponent, CartControlComponent } from "./components";

@NgModule({
  declarations: [CartComponent, CartControlComponent],
  imports: [
    CommonModule
    , ProductsModule
  ],
  exports:[ CartComponent ]
})
export class CartModule { }
