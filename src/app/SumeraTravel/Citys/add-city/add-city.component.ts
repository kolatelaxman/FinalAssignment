import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityServiceService } from 'src/app/Services/Citys_service/cityservice.service';
import { City } from 'src/app/Models/AllModels.Models';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  addCityRequest: City ={
    id: 0,
    name:'',
    countryRefId:0
  }
   constructor(private cityServiceService:CityServiceService, private router: Router ) { }


  ngOnInit(): void {
  }

  AddCity(){
    console.log("coned");
  this.cityServiceService.addCity(this.addCityRequest)
  .subscribe({ 
   next:(citys) => {
    console.log("go to country list");
    this.router.navigate(['Citys'])
     }
  });
   }

}
