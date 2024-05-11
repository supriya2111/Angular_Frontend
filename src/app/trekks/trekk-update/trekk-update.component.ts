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
    this.routeData.params.subscribe((param) => {
        trekkId = param['trekkNumber'];
        console.log("trekk id"+trekkId);
        
        this.trekkService.getTrekkById(trekkId).subscribe((data) => {
            this.trekkData = data;
            // Assuming trekkData is fetched from the server and contains a date in string format
            this.trekkData.trekkDate = new Date(this.trekkData.trekkDate).toISOString().split('T')[0];

            console.log("trekkdata", this.trekkData); // Log inside the subscribe to ensure it's logged after data retrieval
        });
    });
    
  }


  handleUpdateData() {
    this.trekkService.updateTrekk(this.trekkData).subscribe(
      data => {
        alert("Trekk Updated")
        this.route.navigateByUrl("trekks");
      },
      error => {
        console.log(error);
      }
    )
  }

}
