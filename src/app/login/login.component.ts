import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    username : "",
    password : ""
  }

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }
  
  async handleLogin(){
   await this.loginService.checkLogin(this.loginDetails);
    console.log(this.loginDetails.username, this.loginDetails.password); 
  }

}
