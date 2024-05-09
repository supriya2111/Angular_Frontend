import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrekkService } from 'src/services/trekk.service';
import { Trekk } from '../trekk.interface';

@Component({
  selector: 'app-trekk-update',
  templateUrl: './trekk-update.component.html',
  styleUrls: ['./trekk-update.component.css']
})
export class TrekkUpdateComponent implements OnInit {


 
  trekkData: Trekk = {
    id: 0,
    trekkName: '',
    trekkingPoint: '',
    city: '',
    pickupPoint: '',
    trekkDate: '',
    charges: 0,
    image:''
  }
  
  
  constructor(private routeData: ActivatedRoute, private fb:FormBuilder,private trekkService:TrekkService, private route : Router) { 
    
  }

  ngOnInit(): void {
    var trekkId!: number;
    this.routeData.params.subscribe((param) => trekkId = param['trekkNumber']);
    this.trekkService.getTrekkById(trekkId).subscribe((data) => this.trekkData = data);
    console.log("trekkdata"+this.trekkData);
    
  }


  handleUpdateData() {
    this.trekkService.updateTrekk(this.trekkData).subscribe(
      data => {
        alert("Recipe Updated")
        this.route.navigateByUrl("trekks");
      },
      error => {
        console.log(error);
      }
    )
  }

}
