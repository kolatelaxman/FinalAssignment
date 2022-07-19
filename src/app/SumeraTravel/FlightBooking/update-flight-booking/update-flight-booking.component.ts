import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightBooking } from 'src/app/Models/AllModels.Models';
import { FlightBookingServiceService } from 'src/app/Services/FlightBooking_service/flight-booking-service.service';

@Component({
  selector: 'app-update-flight-booking',
  templateUrl: './update-flight-booking.component.html',
  styleUrls: ['./update-flight-booking.component.css']
})
export class UpdateFlightBookingComponent implements OnInit {
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

  constructor(private route:ActivatedRoute, private flightBookingServiceService: 
    FlightBookingServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.flightBookingServiceService.getflightBooking(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.flightBooking = response;
              console.log(this.flightBooking);
            }
          });
        }
      }
    }) 
  }
  UpdateFlightbooking(){
    this.flightBookingServiceService.updateflightBooking(this.flightBooking.id, this.flightBooking)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['FlightBooking'])

      }
    });
  }
 
  DeleteFlightbooking(id:number){
    this.flightBookingServiceService.deleteflightBooking(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['FlightBooking'])
      }
    });

  }

  }

