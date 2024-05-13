import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService,public router:Router) {
     console.log(loginService.isLoggedIn);  
   }

  ngOnInit(): void {
  }

  logout(){
   
    if(confirm('Do you want to logout'))
    {
        this.loginService.handleLogout();
        this.router.navigateByUrl("/trekks");
    }
    else{
      this.router.navigateByUrl("/trekks");
    }
  
  }

}
