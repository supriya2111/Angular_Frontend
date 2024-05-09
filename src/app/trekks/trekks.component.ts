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
  subscription!: Subscription;


  // Creating a stream
  trekkLList$ = this.trekkService.trekks$

  constructor(private trekkService: TrekkService) {

  }

  ngOnInit() {

    // We need to use subscribe method to read the stream of data as Angular uses RxJs which has Observable as a object
    // Helps in getting data continuosly.
    this.trekkService.trekks$.subscribe((data: any) => {
      this.trekkList = data;
      this.listLoaded = true
    })

    // This way we can achieve unsubscribe in ngOnDestroy
    // this.subscription = this.recipeService.getRecipes().subscribe((data: any) => {
    //   this.recipeList = data.recipes;
    //   this.listLoaded = true
    // })
  }

  loadTrekks() {
    console.log("Loading Trekks....")
    this.trekkService.trekks$.subscribe((data: any) => {
      this.trekkList = data;
      this.listLoaded = true
    })
  }

  addTrekk() {
   

  }

  deleteTrekk(id: number) {
    var answer: boolean = confirm("Do you want to Delete Trekk?");
    if (answer) {
      this.trekkService.deleteTrekk(id).subscribe(
        result => {
          this.trekkList = [...result]
        },
        error => {
          console.log(error)
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }


}
