import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from 'src/app/Models/AllModels.Models';
import { AirportServiceService } from 'src/app/Services/Airport_services/airport-service.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {
  
  AirportRequest: Airport ={
    id:0,
    name:'',
    shortName:'',
    cityRefId:0,
    pincode:0,
    logo:'',
    address1:'',
    address2:'',
    address3:'',
    telephone:'',
    telephone2:'',
    email:'',
    email2:''
  }

  constructor(private airportServiceService:AirportServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  AddAirport(){
    alert()
    console.log("coned");
  this.airportServiceService.addAirport(this.AirportRequest)
  .subscribe({ 
   next:(airport) => {
    console.log("go to country list");
    this.router.navigate(['airport'])
     }
  });
  }
}


