import { Component, OnInit } from '@angular/core';
import { CityServiceService } from 'src/app/Services/Citys_service/cityservice.service';
import { City } from 'src/app/Models/AllModels.Models';
 
@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {

  citys: City[] =[];

  constructor(private cityServiceService:CityServiceService) { }

  ngOnInit(): void {
     this.cityServiceService.getAllCity()
     .subscribe({
 
      next:(citys)=>{
        // console.log(CountryRefId)
        this.citys = citys;
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }
}

// export class CounrtyComponent implements OnInit {

//   country: Country[] = [
  
// ];

// constructor(private contryServiceService: ContryServiceService) { }

// ngOnInit(): void {

// this.contryServiceService.getAllCounrty()
// .subscribe({
//   next : (country) => {
//     this.country = country;
//    },
//    error: (response ) => {
//     console.log(response);
//    }
