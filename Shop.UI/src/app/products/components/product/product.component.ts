import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from "../../models";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  public product: ProductModel;

  @Output()
  public bought: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  buy() {
    this.bought.emit(this.product);
  }
}
