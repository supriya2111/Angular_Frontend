import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrekkComponent } from './trekks/add-trekk/add-trekk.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { AddTrekkGuard } from './guards/add-trekk.guard';
import { TrekksComponent } from './trekks/trekks.component';
import { TrekkDataComponent } from './trekks/trekk-data/trekk-data.component';
import { TrekkUpdateComponent } from './trekks/trekk-update/trekk-update.component';
import { TrekkRoutingModule } from './trekks/trekk.routing.module';

const routes: Routes = [
  {
     path: "" , component: WelcomeComponent
  },
  {
    path: "trekks",component:TrekksComponent
  },
  {
    path:"trekks/add", component:AddTrekkComponent
  
  },
  {
    // This is dynamic path, which takes recipeNumber dynamically and sends it to the Component
    path: "trekks/:trekkNumber",
    component: TrekkDataComponent
},
  {
    path:"login" ,component:LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "trekks/update/:trekkNumber",
    component: TrekkUpdateComponent,
    canActivate: [AddTrekkGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, TrekkRoutingModule]
})
export class AppRoutingModule { }
