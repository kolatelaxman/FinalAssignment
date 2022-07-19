import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/Models/AllModels.Models';
import { AirportServiceService } from 'src/app/Services/Airport_services/airport-service.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  airport: Airport[] = [];

  constructor(private airportServiceService: AirportServiceService) { }

  ngOnInit(): void {
    this.airportServiceService.getAllAirport()
  .subscribe({
    next : (airport) => {
      console.log(airport)
      this.airport = airport;
     },
     error: (response ) => {
      console.log(response);
     }
  })
  }

}
