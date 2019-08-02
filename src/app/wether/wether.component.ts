import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-wether',
  templateUrl: './wether.component.html',
  styleUrls: ['./wether.component.css']
})
export class WetherComponent implements OnInit {
  weatherSearchForm:FormGroup;

  constructor() { 
     this.weatherSearchForm = new FormGroup({
      location: new FormControl('', Validators.required),
     })
  }

  ngOnInit() {
  }

}
