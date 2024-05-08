import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient,
    private router :Router
  ) { }

  Login(data:any){
    return this.http.post('http://localhost:8080/login',data).subscribe(
      (result:any) => {
        console.log(result)
        console.log(result.roleid);
        localStorage.setItem('type',JSON.stringify(result))
   
        if(result.roleid === 2){
          this.router.navigate(['/TrekkerDash'])
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
