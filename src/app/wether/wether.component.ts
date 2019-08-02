import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {ChatService} from '../../chat.service';


@Component({
  selector: 'app-wether',
  templateUrl: './wether.component.html',
  styleUrls: ['./wether.component.css']
})
export class WetherComponent implements OnInit {
  weatherSearchForm : FormGroup;
  wheatherData;

  constructor(private http:HttpClient) { 
     this.weatherSearchForm = new FormGroup({
      location: new FormControl('', Validators.required),
     })
  }

  ngOnInit() {
  }
  SearchWeather(data){
  console.log("===========",data.value);
   return this.http.get(
          'http://api.apixu.com/v1/current.json?key=124e0aa04db34eb8b4f102003190208&q=' + data.value.location
      ).subscribe((res)=>{
        console.log(res);
this.wheatherData = res;
console.log(this.wheatherData)
      },err=>{
        console.log(err);
        this.wheatherData = ''
      })
}
}
