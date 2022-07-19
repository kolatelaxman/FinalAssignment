import { Component, OnInit } from '@angular/core';
import { flight } from 'src/app/Models/AllModels.Models';
import { FlightService } from 'src/app/Services/Flight_service/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flight: flight[] = [];


  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getAllflight()
  .subscribe({
    next : (flight) => {
      console.log(flight)
      this.flight = flight;
     },
     error: (response ) => {
      console.log(response);
     }
  })
  }

}
