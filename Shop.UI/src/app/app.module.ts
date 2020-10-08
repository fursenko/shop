import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from "./cart/cart.module";
import { OrdersModule } from "./orders/orders.module";
import { ProductsModule } from "./products/products.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
    , CartModule
    , OrdersModule
    , ProductsModule
    , SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
