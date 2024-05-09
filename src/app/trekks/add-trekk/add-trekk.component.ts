import { Component, OnInit } from '@angular/core';
import { Trekk } from '../trekk.interface';
import { TrekkService } from 'src/services/trekk.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trekk',
  templateUrl: './add-trekk.component.html',
  styleUrls: ['./add-trekk.component.css']
})
export class AddTrekkComponent implements OnInit {

  reactiveForm!: FormGroup;
  formStatus: any;
  
  
  constructor( private fb:FormBuilder,private trekkService:TrekkService, private route : Router) { 
    this.reactiveForm = this.fb.group({
    id: 0,
    trekkName: '',
    trekkingPoint: '',
    city: '',
    pickupPoint: '',
    trekkDate: '',
    charges: 0,
    image:''
    });
  }

  ngOnInit(): void {
   
    this.reactiveForm = new FormGroup({
    id: new FormControl(),
    trekkName: new FormControl(null,Validators.required),
    trekkingPoint: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required),
    pickupPoint: new FormControl(null,Validators.required),
    trekkDate: new FormControl(null,Validators.required),
    charges: new FormControl(null,Validators.required),
    image:new FormControl(null,Validators.required)
    });
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus = value;
      
    })

  }

  onSubmit(){

    if(this.reactiveForm.valid){
      console.log("Added Trekk"+this.reactiveForm.value.trekkName);
  
     
      this.trekkService.addTrekk(this.reactiveForm.value).subscribe({
        next:(val:any) => {
          alert("Trekk added successfully")
          this.route.navigate(['trekks']); 
        },
        error: (err:any) => {
          console.error(err);
          
        }
      })
       
    
     }
   
  }

}
