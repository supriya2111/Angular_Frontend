import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Trekk } from '../trekk.interface';
import { TrekksComponent } from '../trekks.component';
import { LoginService } from 'src/app/login/services/login.service';
import { TrekkService } from 'src/services/trekk.service';

@Component({
  selector: 'app-trekk-card',
  templateUrl: './trekk-card.component.html',
  styleUrls: ['./trekk-card.component.css']
})
export class TrekkCardComponent implements OnInit {
  
  color:string = 'red';

  @Input()
  trekkList: Trekk[] =[];

  @Output() trekkToDelete : EventEmitter<number>  = new EventEmitter<number>()

  @ViewChild(TrekksComponent)
  main!: TrekksComponent;

  constructor(private trekkService : TrekkService,public loginService : LoginService) { }

  list!: Trekk[];
  
  ngOnInit() {
    console.log(this.trekkList.map((val)=>{
        console.log("Value"+val);
        
    }));
    
  }

  deleteTrekk(id:number){
    console.log("id"+id);
    this.trekkToDelete.emit(id);
  }

  
  getDetailsColor() {
    return this.color;
  }

 
}
