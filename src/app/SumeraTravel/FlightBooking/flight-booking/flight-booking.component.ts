import { Component, OnInit } from '@angular/core';
import { FlightBooking } from 'src/app/Models/AllModels.Models';
import { FlightBookingServiceService } from 'src/app/Services/FlightBooking_service/flight-booking-service.service';

 
@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  flightbooking:  FlightBooking [] = [];


  constructor(private  flightBookingServiceService : FlightBookingServiceService) { }

  ngOnInit(): void {
    this.flightBookingServiceService.getAllflightBooking()
    .subscribe({
      next : (flightbooking) => {
        console.log(flightbooking)
        
        this.flightbooking = flightbooking;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
}
