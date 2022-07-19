import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight } from 'src/app/Models/AllModels.Models';
import { FlightService } from 'src/app/Services/Flight_service/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flightRequest: flight ={
    id: 0,
    code:'',
    fromAirPortRefId:0,
    toAirPortRefId:0,
    telephone:'',
    telephone2:''
  }

  constructor(private flightService:FlightService, private router: Router) { }

  ngOnInit(): void {
  }
  AddFlight(){
    alert()
    console.log("coned");
  this.flightService.addflight(this.flightRequest)
  .subscribe({ 
   next:(Flight) => {
    console.log("go to country list");
    this.router.navigate(['Flight'])
     }
  });
  }
}
