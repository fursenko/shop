import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from "../products/products.module";

import { CartComponent } from "./components";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule
    , ProductsModule
  ],
  exports:[ CartComponent ]
})
export class CartModule { }
