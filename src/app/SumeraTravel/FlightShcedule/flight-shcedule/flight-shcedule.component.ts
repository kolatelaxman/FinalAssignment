import { Component, OnInit } from '@angular/core';
import { Flightshcedule, FlightTravel } from 'src/app/Models/AllModels.Models';
import { FlightshceduleServiceService } from 'src/app/Services/Flightshcedule_service/flightshcedule-service.service';

@Component({
  selector: 'app-flight-shcedule',
  templateUrl: './flight-shcedule.component.html',
  styleUrls: ['./flight-shcedule.component.css']
})
export class FlightShceduleComponent implements OnInit {
  flightshcedule: Flightshcedule[] = [];

  
  constructor(private flightshceduleServiceService: FlightshceduleServiceService) { }

  ngOnInit(): void {
    this.flightshceduleServiceService.getAllFlightshcedule()
    .subscribe({
      next : (flightshcedule) => {
        console.log(flightshcedule)
        this.flightshcedule = flightshcedule;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }
  

  




// flightshcedule: Flightshcedule ={
//   id: 0,
//   flightRefId:0,
//   departureDate:'',
//   arrivaldate:'',
// }
