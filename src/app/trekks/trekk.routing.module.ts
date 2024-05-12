import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTrekkComponent } from "./add-trekk/add-trekk.component";
import { FormsModule } from "@angular/forms";
import { AddTrekkGuard } from "../guards/add-trekk.guard";

const routes :Routes = [
    {
        path : "trekks/add",
        component : AddTrekkComponent,
        canActivate: [AddTrekkGuard]
    }
]

@NgModule({
    imports: [
        // forRoot takes the variables which has the routes information inside it
        RouterModule.forRoot(routes),
        RouterModule,
        FormsModule
    ],
    exports: [RouterModule],
})

export class TrekkRoutingModule{
    
}