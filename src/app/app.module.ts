import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from '@ngrx/store';
import { addProductReducer, bulkAddProductReducer } from './reducers/product.reducer';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { CreateComponent } from './components/create/create.component';
import { ProductComponent } from './pages/product/product.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    ProductComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatTabsModule,
    StoreModule.forRoot({ addProduct: addProductReducer, bulkAddProduct: bulkAddProductReducer })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
