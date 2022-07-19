import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightTravel } from 'src/app/Models/AllModels.Models';
import { FlightTravelService } from 'src/app/Services/FlightTravel_service/flight-travel.service';

@Component({
  selector: 'app-add-flight-travel',
  templateUrl: './add-flight-travel.component.html',
  styleUrls: ['./add-flight-travel.component.css']
})
export class AddFlightTravelComponent implements OnInit {
  flightTravel: FlightTravel ={
    id: 0,
    flightRefId:0,
    travelClassRefId:0,
    rent:0
  }

  constructor(private flightTravelService:FlightTravelService, private router: Router ) { }

  ngOnInit(): void {
  }
  AddFlight(){
     console.log("coned");
  this.flightTravelService.addFlight(this.flightTravel)
  .subscribe({ 
   next:(Flight) => {
    console.log("go to country list");
    this.router.navigate(['FlightTravel'])
     }
  });
   }

}
