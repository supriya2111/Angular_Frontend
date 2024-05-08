import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TrekksComponent } from './trekks/trekks.component';
import { AddTrekkComponent } from './trekks/add-trekk/add-trekk.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrekksComponent,
    AddTrekkComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
