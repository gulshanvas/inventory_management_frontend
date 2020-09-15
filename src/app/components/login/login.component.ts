import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  title: string;

  primaryDisable: boolean = true;
  secondaryDisable: boolean = false;


  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.title = 'Login';
    console.log('this.cookieService init : ', this.cookieService);
    this.cookieService.set('test', 'ngOnInit', 1, null, null, null, 'Strict');
    let loginFormGroup = {
      userName: new FormControl(
        "",
        Validators.required
      ),
      password: new FormControl(
        "",
        Validators.required
      ),
    };

    this.loginForm = new FormGroup(loginFormGroup);

    this.loginForm.statusChanges.subscribe(
      (status: string) => (this.primaryDisable = status !== "VALID")
    );
  }

  processLoginForm(loginFormObj: User) {

    this.userService.login(loginFormObj).subscribe((res: any) => {
      // Set login cookie.
      this.cookieService.set('lcn', res.set.lcn, 1, null, null, null, 'Strict');
      this.router.navigate(["/product"]);
    });

  }
}
