import { Injectable } from '@angular/core';
import { ProductModel } from "../models";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  products: ProductModel[] = [];

  getProducts(): Observable<any> {

    return this.http.get('http://localhost:54485/products')
  }
}
