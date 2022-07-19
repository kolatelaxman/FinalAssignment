import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightTravel } from 'src/app/Models/AllModels.Models';
import { FlightTravelService } from 'src/app/Services/FlightTravel_service/flight-travel.service';

@Component({
  selector: 'app-update-flight-travel',
  templateUrl: './update-flight-travel.component.html',
  styleUrls: ['./update-flight-travel.component.css']
})
export class UpdateFlightTravelComponent implements OnInit {
  flightTravel: FlightTravel ={
    id: 0,
    flightRefId:0,
    travelClassRefId:0,
    rent:0
  }

  constructor(private route:ActivatedRoute, private flightTravelService: 
    FlightTravelService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.flightTravelService.getFlight(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.flightTravel = response;
              console.log(this.flightTravel);
            }
          });
        }
      }
    })
  }
  UpdateFlight(){
    this.flightTravelService.updateFlight(this.flightTravel.id, this.flightTravel)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['FlightCustemar'])


      }
    });
  }
 
  DeleteFlight(id:number){
    this.flightTravelService.deleteFlight(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['FlightCustemar'])
      }
    });

  }

}
  
