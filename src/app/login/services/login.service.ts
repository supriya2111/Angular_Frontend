import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  validateLogin(data: any) {
    console.log(data.username + " " + data.password);

    //For MongoDB Container
    // return this.http.post("http://localhost:8081/login",data).subscribe(
    //   (result:any) => {
    //     console.log("result"+result)
    //     this.isLoggedIn =result;

    //   if(this.isLoggedIn)
    //     this.router.navigateByUrl("/trekks");
    //   else
    //     alert("Login Failed!");
    // },
    // (error) => {
    //     console.log(error);
    //   }
    // )

    //For MySQL Container
    //   return this.http.post("http://localhost:8083/login",data).subscribe(
    //     (result:any) => {
    //       console.log("result"+result)
    //       this.isLoggedIn =result;

    //       if(this.isLoggedIn)
    //         this.router.navigateByUrl("/trekks");
    //       else
    //         alert("Login Failed!");
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
    // }


    return this.http.post("http://localhost:8082/login", data).subscribe(
      (result: any) => {
        console.log("result" + result)
        this.isLoggedIn = result;

        if (this.isLoggedIn)
          this.router.navigateByUrl("/trekks");
        else
          alert("Login Failed!");
      },
      (error) => {
        console.log(error);
      }
    )
  }


  handleLogout() {
    this.isLoggedIn = false;
  }
}
