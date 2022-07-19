import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightCustomer } from 'src/app/Models/AllModels.Models';
import { FlightServiceService } from 'src/app/Services/FlightCustomer_service/flight-service.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  flightCustomer: FlightCustomer ={
    id: 0,
    firstName:'',
    lastName:'',
    age:0,
    flightBookingId:0,
    userRefId:0,
  }


  constructor(private route:ActivatedRoute, private flightServiceService: 
  FlightServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.flightServiceService.getFlightCustomer(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.flightCustomer = response;
              console.log(this.flightCustomer);
            }
          });
        }
      }
    }) 
  }
  UpdateFlightbooking(){
    this.flightServiceService.updateFlightCustomer(this.flightCustomer.id, this.flightCustomer)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['FlightBooking'])

      }
    });
  }
 
  DeleteFlightbooking(id:number){
    this.flightServiceService.deleteFlightCustomer(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['FlightBooking'])
      }
    });

  }

}
