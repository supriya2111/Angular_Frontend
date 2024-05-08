import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';
import { Trekk } from 'src/app/trekks/trekk.interface';

@Injectable({
  providedIn: 'root'
})
export class TrekkService {

  constructor(private http:HttpClient,@Inject(APP_SERVICE_CONFIG) private config: any) { }

   addTrekk(trekk:Trekk){
    return this.http.post<Trekk[]>(this.config.apiEndpoint+ "/add" ,trekk);
   }
}
