import { Component, OnInit } from '@angular/core';
import { FlightTravel } from 'src/app/Models/AllModels.Models';
import { FlightTravelService } from 'src/app/Services/FlightTravel_service/flight-travel.service';

@Component({
  selector: 'app-flight-travel',
  templateUrl: './flight-travel.component.html',
  styleUrls: ['./flight-travel.component.css']
})
export class FlightTravelComponent implements OnInit {
  flightTravel: FlightTravel[] = [];


  constructor(private flightTravelService: FlightTravelService) { }

  ngOnInit(): void {
    this.flightTravelService.getAllFlight()
    .subscribe({
      next : (flightTravel) => {
        console.log(flightTravel)
        this.flightTravel = flightTravel;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }
  


