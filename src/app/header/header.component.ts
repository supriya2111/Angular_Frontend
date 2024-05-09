import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';
import { InitService } from '../init.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private initService: InitService,public loginService:LoginService,public router:Router) {
    console.log(initService.config)
     console.log(loginService.isLoggedIn);
     
   }

  ngOnInit(): void {
  }


  
  handleLogout(){
    this.loginService.handleLogout();
    this.router.navigateByUrl("/trekks");
  }

}
