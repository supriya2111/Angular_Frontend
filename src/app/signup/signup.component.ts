import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
handleSignUp() {
throw new Error('Method not implemented.');
}

  signUpDetails = {
    name : "",
    email : "",
    password : ""
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
