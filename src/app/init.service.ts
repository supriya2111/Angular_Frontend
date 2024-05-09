import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {

config : any;

constructor(private http : HttpClient) { }

public init(){
  return this.http.get("/assets/config.json")
  .pipe(
    tap( (config:any) => {this.config = config;console.log(this.config)})
  )
}

}
