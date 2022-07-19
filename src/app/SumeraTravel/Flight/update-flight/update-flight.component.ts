import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { flight } from 'src/app/Models/AllModels.Models';
import { FlightService } from 'src/app/Services/Flight_service/flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  flightRequest: flight ={
    id: 0,
    code:'',
    fromAirPortRefId:0,
    toAirPortRefId:0,
    telephone:'',
    telephone2:''
  }

  constructor(private route:ActivatedRoute, private flightService: 
    FlightService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.flightService.getflight(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.flightRequest = response;
              console.log(this.flightRequest);
            }
          });
        }
      }
    })
  }
  UpdateFlight(){
    this.flightService.updateflight(this.flightRequest.id, this.flightRequest)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Flight'])
      }
    });
  }
 
  Deleteflight(id:number){
    this.flightService.deleteflight(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Flight'])
      }
    });
  }
}

  
