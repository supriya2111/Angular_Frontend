import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false; // Assume the user is initially not logged in

  signinForm:FormGroup;
  
  constructor(private router:Router,
    private loginService:LoginService,
    private fb:FormBuilder
  ) {
    this.signinForm =this.fb.group({
      username: '',
      password: ''

    });
   }

  ngOnInit(): void {
  }
    

  Login(){

    // After successful sign-in
    this.isLoggedIn = true;
    console.log(this.isLoggedIn)
    console.log(this.signinForm.value)
    if(this.signinForm.valid){
      this.loginService.Login(this.signinForm.value)
    //   .subscribe(
    //     (result) =>{
    //        console.log(result);
           
    //     }
    //   )
    //   // setTimeout(()=>{
    //   //   this.router.navigate(['TrekkerDash'])
    //   //  },1000)
  }
  }
 


}
