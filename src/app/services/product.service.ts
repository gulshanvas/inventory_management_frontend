import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static BASE_URL = "http://localhost:4000/api";

  products: Array<Product> = [];

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  createProduct({
    name,
    price,
    company_name,
    count
  }: any
  ) {

    return this.http
      .post(`${ProductService.BASE_URL}/product/create`,
        { productName: name, price, companyName: company_name, productCount: count },
        { withCredentials: true })
      .pipe(map(res => res));
  }

  getProducts() {
    console.log('network call');
    return this.http
      .get(`${ProductService.BASE_URL}/product/list`,
        { withCredentials: true })
      .pipe(
        map((res: any) => { console.log('reached inside'); this.products = res.response; return this.products; }

        ));
  }
}
