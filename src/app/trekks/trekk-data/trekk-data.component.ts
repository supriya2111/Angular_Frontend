import { Component, OnInit } from '@angular/core';
import { Trekk } from '../trekk.interface';
import { ActivatedRoute } from '@angular/router';
import { TrekkService } from 'src/services/trekk.service';

@Component({
  selector: 'app-trekk-data',
  templateUrl: './trekk-data.component.html',
  styleUrls: ['./trekk-data.component.css']
})
export class TrekkDataComponent implements OnInit {
  trekkData!: Trekk;
  
  constructor(private route: ActivatedRoute,private trekkService : TrekkService) { }

  ngOnInit() {
    var trekkId !:number;;
    this.route.params.subscribe((params) => { trekkId = params['trekkNumber']} );
    this.trekkService.getTrekkById(trekkId).subscribe((trekk) => {
      this.trekkData = trekk;
    
    });
  }

}
