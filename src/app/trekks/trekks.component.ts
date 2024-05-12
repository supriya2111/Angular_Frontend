import { Component, OnInit } from '@angular/core';
import { Trekk } from './trekk.interface';
import { Subscription } from 'rxjs';
import { TrekkService } from 'src/services/trekk.service';

@Component({
  selector: 'app-trekks',
  templateUrl: './trekks.component.html',
  styleUrls: ['./trekks.component.css']
})
export class TrekksComponent implements OnInit {

  trekkList: Trekk[] = [];
  listLoaded: boolean = false;


  trekkLList$ = this.trekkService.trekks$

  constructor(private trekkService: TrekkService) {

  }

  ngOnInit() {

    this.trekkService.trekks$.subscribe((data: any) => {
      this.trekkList = data;
      this.listLoaded = true
    })

  }

  loadTrekks() {
    console.log("Loading Trekks....")
    this.trekkService.trekks$.subscribe((data: any) => {
      this.trekkList = data;
      this.listLoaded = true
    })
  }

  deleteTrekk(id: number) {
    var answer: boolean = confirm("Do you want to Delete Trekk?");
    if (answer) {
      console.log(answer+""+id);
      
      this.trekkService.deleteTrekk(id).subscribe({
       next:(result)  => {
         this.loadTrekks();
        },
        error:(error) => {
          console.log(error)
        }
      } );
    }
  }

}
