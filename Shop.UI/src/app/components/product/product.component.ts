import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from "../../models";
import { CartService } from "../../services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: ProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  buy() {
    this.cartService.add(this.product);
  }
}
