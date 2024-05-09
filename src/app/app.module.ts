import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TrekksComponent } from './trekks/trekks.component';
import { AddTrekkComponent } from './trekks/add-trekk/add-trekk.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TrekkCardComponent } from './trekks/trekk-card/trekk-card.component';
import { TrekkDataComponent } from './trekks/trekk-data/trekk-data.component';
import { TrekkUpdateComponent } from './trekks/trekk-update/trekk-update.component';
import { RouterModule } from '@angular/router';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app.config';
import { InitService } from './init.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrekksComponent,
    AddTrekkComponent,
    SignupComponent,
    WelcomeComponent,
    LoginComponent,
    TrekkCardComponent,
    TrekkDataComponent,
    TrekkUpdateComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
