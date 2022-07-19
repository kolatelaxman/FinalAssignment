import { DATE_PIPE_DEFAULT_TIMEZONE, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightBooking } from 'src/app/Models/AllModels.Models';
import { FlightBookingServiceService } from 'src/app/Services/FlightBooking_service/flight-booking-service.service';

@Component({
  selector: 'app-add-flight-booking',
  templateUrl: './add-flight-booking.component.html',
  styleUrls: ['./add-flight-booking.component.css']
})
export class AddFlightBookingComponent implements OnInit {
  flightBooking: FlightBooking ={
    id: 0,
    userRefId:0,
    bookingDate:'',
    flightScheduleId: 0,
    contactNumber:0,
    contactEmail:'',
    numberOfTicket:0,
    totalAmount:0,
   }

  constructor(private flightBookingServiceService:FlightBookingServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  AddFlightbooking(){
    alert()
    console.log("coned");
  this.flightBookingServiceService.addflightBooking(this.flightBooking)
  .subscribe({ 
   next:(hotel) => {
    console.log("go to country list");
    this.router.navigate(['FlightBooking'])
     }
  });
   }
  }
