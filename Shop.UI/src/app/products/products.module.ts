import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ProductComponent
  , ProductListComponent } from "./components";

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule
    , HttpClientModule
  ],
  exports:[ProductListComponent]

})
export class ProductsModule { }
