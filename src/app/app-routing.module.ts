import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrekkComponent } from './trekks/add-trekk/add-trekk.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { AddTrekkGuard } from './guards/add-trekk.guard';
import { TrekksComponent } from './trekks/trekks.component';

const routes: Routes = [
  {
     path: "" , component: WelcomeComponent
  },
  {
    path: "trekks",component:TrekksComponent
  },
  {
    path:'trekks/add', component:AddTrekkComponent,
    canActivate: [AddTrekkGuard]
  },
  {
    path:"login" ,component:LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
