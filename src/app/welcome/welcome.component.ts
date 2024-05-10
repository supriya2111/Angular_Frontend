import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
color: string ='#eeeeee';

 

  constructor() { }

  ngOnInit(): void {
  }

}
