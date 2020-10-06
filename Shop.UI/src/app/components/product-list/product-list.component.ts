import { Component, OnInit } from '@angular/core';
import {
  ProductsService
  , CartService
} from "../../services";
import { ProductModel } from "../../models";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];
  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data
    });
  }
}
