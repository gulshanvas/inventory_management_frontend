import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  static BASE_URL = "http://localhost:4000/api";

  constructor(private http: HttpClient) { }

  login({
    userName,
    password,
  }: User) {
    return this.http
      .post(`${UserService.BASE_URL}/auth/login`, { userName, password })
      .pipe(map(res => res));
  }
}
