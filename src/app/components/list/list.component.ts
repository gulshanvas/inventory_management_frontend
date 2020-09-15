import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource, MatSnackBar } from "@angular/material";

import { select, Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { bulkAddProduct, addProduct } from '../../actions/product.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allColumns: Array<string> = [
    "productName",
    "price",
    "companyName",
    "count",
  ];

  dataSource = new MatTableDataSource();

  products: Observable<Product[]> = of([]);

  constructor(
    private productService: ProductService,
    private store: Store<{ products: Product[] }>
  ) { }

  ngOnInit() {
    this.store.subscribe((res: any) => { this.dataSource.data = res.addProduct });
    // fetch all products
    this.productService.getProducts().subscribe(res => {
      this.dataSource.data = res;
      res.forEach((product) => {
        this.addBulkProducts(product);
      });
    });

  }

  addBulkProducts(product: Product) {
    this.store.dispatch(addProduct({ product }));
  }
}
