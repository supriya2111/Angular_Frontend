import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient, @Inject(APP_SERVICE_CONFIG) private config: any ) { 

  }


  registerUser(data:any):Observable<any>{
    console.log("Formdata"+data.username+" "+data.roleid);
    return this.http.post('http://localhost:8081/register',data);
  }
}
