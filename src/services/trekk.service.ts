import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';
import { Trekk } from 'src/app/trekks/trekk.interface';

@Injectable({
  providedIn: 'root'
})
export class TrekkService {

  constructor(private http: HttpClient, @Inject(APP_SERVICE_CONFIG) private config: any) { }

  trekks$ = this.http.get<Trekk[]>(this.config.apiEndpoint, {
    headers: new HttpHeaders({})
  }).pipe(
    catchError((error) => {
      console.log(error)
      return of([]);
    })
  )


  addTrekk(trekk: Trekk) {
    console.log("trekk" + trekk);
    return this.http.post<Trekk[]>(this.config.apiEndpoint + "/add", trekk);
  }

  getTrekks(): Observable<Trekk[]> {
    return this.http.get<Trekk[]>(this.config.apiEndpoint);
  }

  getTrekkById(trekkId: number) {
    console.log(trekkId);
    return this.http.get<Trekk>(this.config.apiEndpoint + `/${trekkId}`);
    console.log(this.config.apiEndpoint + `/${trekkId}`);

  }

  updateTrekk(trekk: Trekk) {
    console.log("Trekk", trekk);
    return this.http.put<Trekk[]>(this.config.apiEndpoint, trekk);
  }

  deleteTrekk(id: number) {
    return this.http.delete<Trekk[]>(this.config.apiEndpoint + `/${id}`);
  }

}
