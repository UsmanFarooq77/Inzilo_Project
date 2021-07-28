import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor() {
    this.userName = "Usman";
    this.password = "1234567890"
  }
  ngOnInit(): void {
  }
  login(values: NgForm) {
    if (values.controls['userName'].value == this.userName && values.controls['password'].value == this.password) {
      alert("User Verified.")
      values.resetForm();
    }
    else {
      alert("User not verified.Try again!");
      values.resetForm();
    }
  }
}
