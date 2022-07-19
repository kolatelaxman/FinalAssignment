import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Models/AllModels.Models';
import { AirlineServicesService } from 'src/app/Services/Airline_services/airline-services.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  airline: Airline[] = [];


  constructor(private airlineServicesService: AirlineServicesService) { }
  
  ngOnInit(): void {
    this.airlineServicesService.getAllAirline()
    .subscribe({
      next : (airline) => {
        console.log(airline)
        this.airline = airline;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }


