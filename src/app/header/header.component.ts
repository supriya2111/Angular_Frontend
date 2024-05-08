import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
  }


  
  handleLogout(){
    this.loginService.handleLogout();
    this.router.navigateByUrl("/trekks");
  }

}
