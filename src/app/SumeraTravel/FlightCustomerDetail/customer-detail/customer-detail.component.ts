import { Component, OnInit } from '@angular/core';
import { FlightCustomer } from 'src/app/Models/AllModels.Models';
import { FlightServiceService } from 'src/app/Services/FlightCustomer_service/flight-service.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  flightCustomer: FlightCustomer[] = [];


  constructor(private flightServiceService: FlightServiceService) { }
    ngOnInit(): void {
      this.flightServiceService.getAllFlightCustomer()
      .subscribe({
        next : (flightCustomer) => {
          console.log(flightCustomer)
          this.flightCustomer = flightCustomer;
         },
         error: (response ) => {
          console.log(response);
         }
      })
      }
    }
    
  
  


