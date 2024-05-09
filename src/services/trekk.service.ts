import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';
import { Trekk } from 'src/app/trekks/trekk.interface';

@Injectable({
  providedIn: 'root'
})
export class TrekkService {


  trekks$ = this.http.get<Trekk[]>(this.config.apiEndpoint,{
    headers: new HttpHeaders({
     // "Jayesh-Header": "rkfjtoiewfksnkjfnr W3N42J323 RM23OJR5H32O4ITHJ34 GKERNV3OKJ4TNGRFJND"
    })
  }).pipe(
    // Error Handling in RxJs
    // Just like catch in Promise of JS
    catchError((error) => {
      console.log(error)
      // We need to return an empty Array as it is expecting an array
      return of([]);
    })
  )

   addTrekk(trekk:Trekk){
    console.log("trekk"+trekk);
    
    return this.http.post<Trekk[]>(this.config.apiEndpoint+ "/add" ,trekk);
   }



  constructor(private http: HttpClient, @Inject(APP_SERVICE_CONFIG) private config: any) { }

  getTrekks() :Observable<Trekk[]>{

    // Using the Http Client to get the request and response from the API
    // We need to provide the Interface of which type the data is going to be received from the backend or the API
    return this.http.get<Trekk[]>(this.config.apiEndpoint);
    
  }


  getTrekkById(trekkId: number) {
    return this.http.get<Trekk>(this.config.apiEndpoint + `/${trekkId}`);
    // return this.http.get<Recipe>("http://localhost:8080/recipes/1");

    console.log(this.config.apiEndpoint + `/${trekkId}`);
    
  }

  updateTrekk(trekk: Trekk)
  {
    return this.http.put<Trekk[]>(this.config.apiEndpoint, trekk);
  }

  deleteTrekk(id: number)
  {
    return this.http.delete<Trekk[]>(this.config.apiEndpoint + `/${id}`);
  }

}
