import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightCustomer } from 'src/app/Models/AllModels.Models';
import { FlightServiceService } from 'src/app/Services/FlightCustomer_service/flight-service.service';

@Component({
  selector: 'app-add-customer-detail',
  templateUrl: './add-customer-detail.component.html',
  styleUrls: ['./add-customer-detail.component.css']
})
export class AddCustomerDetailComponent implements OnInit {
  flightCustomer: FlightCustomer ={
    id: 0,
    firstName:'',
    lastName:'',
    age:0,
    flightBookingId:0,
    userRefId:0,
  }


  constructor(private flightServiceService:FlightServiceService, private router: Router ) { }

  ngOnInit(): void {
  }
  AddFlightCustomer(){
    console.log("coned");
 this.flightServiceService.addFlightCustomer(this.flightCustomer)
 .subscribe({ 
  next:(Flight) => {
   console.log("go to country list");
   this.router.navigate(['FlightCustemar'])
    }
 });
  }
}


