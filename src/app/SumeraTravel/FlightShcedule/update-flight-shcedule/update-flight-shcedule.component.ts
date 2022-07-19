import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flightshcedule } from 'src/app/Models/AllModels.Models';
import { FlightshceduleServiceService } from 'src/app/Services/Flightshcedule_service/flightshcedule-service.service';

@Component({
  selector: 'app-update-flight-shcedule',
  templateUrl: './update-flight-shcedule.component.html',
  styleUrls: ['./update-flight-shcedule.component.css']
})
export class UpdateFlightShceduleComponent implements OnInit {

  flightshcedule: Flightshcedule ={
    id: 0,
    flightRefId:0,
    departureDate:'',
    arrivalDate:''
   }
  constructor(private route:ActivatedRoute, private flightshceduleServiceService: 
    FlightshceduleServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.flightshceduleServiceService.getFlightshedule(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.flightshcedule = response;
              console.log(this.flightshcedule);
            }
          });
        }
      }
    }) 
  }
  UpdateFlightshcedule(){
    this.flightshceduleServiceService.updateFlightshcedule(this.flightshcedule.id, this.flightshcedule)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['FlightShcedule'])

      }
    });
  }
 
  DeleteFlightshedule(id:number){
    this.flightshceduleServiceService.deleteFlightShcedule(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['FlightShcedule'])
      }
    });

  }

}
  
