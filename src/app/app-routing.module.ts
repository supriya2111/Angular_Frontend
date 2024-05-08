import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrekkComponent } from './trekks/add-trekk/add-trekk.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'addtrekk', component:AddTrekkComponent},
  {path:'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
