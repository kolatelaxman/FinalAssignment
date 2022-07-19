import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Models/AllModels.Models';
import { AirlineServicesService } from 'src/app/Services/Airline_services/airline-services.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  AirlineRequest: Airline ={
    id:0,
    code:'',
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

  constructor(private airlineServicesService:AirlineServicesService, private router: Router) { }
  ngOnInit(): void {
  }
    AddAirlinr(){
      alert()
      console.log("coned");
    this.airlineServicesService.addAirline(this.AirlineRequest)
    .subscribe({ 
     next:(airport) => {
      console.log("go to country list");
      this.router.navigate(['Airline'])
       }
    });
    }
  }

