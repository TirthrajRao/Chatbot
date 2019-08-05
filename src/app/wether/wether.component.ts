import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { countries, currencies, regions, languages, callingCountries } from 'country-data';
declare const require: any
@Component({
  selector: 'app-wether',
  templateUrl: './wether.component.html',
  styleUrls: ['./wether.component.css']
})
export class WetherComponent implements OnInit {
  weatherSearchForm: FormGroup;
  wheatherData;
  isSubmitted = false;
  isDisable = false;
  
  constructor(private http: HttpClient) {
    this.weatherSearchForm = new FormGroup({
      location: new FormControl('', Validators.required),
    })
  }
  
  get tmpValidation() {
    return this.weatherSearchForm.controls;
  }
  ngOnInit() {
    // console.log('countries==================>', countries.all);
    // console.log('Curruencies====================>', currencies.all);
    let lookup = require('country-data').lookup;
    const country = lookup.countries({ name: 'France' })[0];
    console.log('country code============>', country.currencies[0]);
    return this.http.get('https://free.currconv.com/api/v7/convert?q=' + country.currencies[0] + '_INR&compact=ultra&apiKey=5e7f2a7594733468f38c'
    ).subscribe((res: any) => {
      console.log('converted curruncy============>', res)
    })
  }



  SearchWeather(data) {
    if (this.weatherSearchForm.invalid) {
      return;
    }
    this.isDisable = true;
    console.log("===========", data.value);
    return this.http.get(
      'http://api.apixu.com/v1/current.json?key=124e0aa04db34eb8b4f102003190208&q=' + data.value.location
    ).subscribe((res) => {
      console.log(res);
      this.wheatherData = res;
      this.isDisable = false;
      console.log(this.wheatherData)
    }, err => {
      console.log(err);
      this.wheatherData = ''
      this.isDisable = false;
    })
  }
}
