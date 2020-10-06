import { Injectable } from '@angular/core';
import { ProductModel, Category } from "../models";
import { of, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  products: ProductModel[] = [];

  getProducts(): Observable<ProductModel[]> {
    
    // for (let i = 0; i < 10; i++) {
    //   const pr = new ProductModel();
    //   pr.category = Category.Food;
    //   pr.description = `Product ${i}`;
    //   pr.isAvailable = true;
    //   pr.name = `Product ${i}`;
    //   pr.price = (i + 1) * 1.2;
    //   this.products.push(pr);
    // }
    // this.http.get('http://localhost:54485/products')
    // .subscribe(res => console.log(res));
    // )
    
    return of(this.products);
  
  }
}
