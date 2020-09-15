import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { ProductService } from "src/app/services/product.service";

import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { addProduct } from '../../actions/product.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  title: string;

  primaryDisable: boolean = true;
  secondaryDisable: boolean = false;


  constructor(
    private product: ProductService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private store: Store<{ addProduct: Product }>
  ) {
  }

  ngOnInit() {
    this.title = 'Create Product';

    let createFormGroup = {
      name: new FormControl(
        "",
        Validators.required
      ),
      price: new FormControl(
        "",
        Validators.required
      ),
      company_name: new FormControl(
        "",
        Validators.required
      ),
      count: new FormControl(
        "",
        Validators.required
      ),
    };

    this.createForm = new FormGroup(createFormGroup);

    this.createForm.statusChanges.subscribe(
      (status: string) => (this.primaryDisable = status !== "VALID")
    );
  }

  processCreateProductForm(productObj: Product) {

    this.product.createProduct(productObj).subscribe((res: any) => {
      // success
      
      this.addProduct(productObj);
    });
  }

  addProduct(productObj: Product) {
    this.store.dispatch(addProduct({ product: productObj }));
  }

}
