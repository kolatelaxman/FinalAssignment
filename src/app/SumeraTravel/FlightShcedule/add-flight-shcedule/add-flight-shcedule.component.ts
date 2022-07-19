import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flightshcedule } from 'src/app/Models/AllModels.Models';
import { FlightshceduleServiceService } from 'src/app/Services/Flightshcedule_service/flightshcedule-service.service';

@Component({
  selector: 'app-add-flight-shcedule',
  templateUrl: './add-flight-shcedule.component.html',
  styleUrls: ['./add-flight-shcedule.component.css']
})
export class AddFlightShceduleComponent implements OnInit {
  flightshcedule: Flightshcedule ={
    id: 0,
    flightRefId:0,
    departureDate:'',
    arrivalDate:''
   }

  constructor(private flightshceduleServiceService:FlightshceduleServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  AddFlightshcedules(){
    console.log("coned");
 this.flightshceduleServiceService.addFlightshcedule(this.flightshcedule)
 .subscribe({ 
  next:(Flight) => {
   console.log("go to country list");
   this.router.navigate(['FlightShcedule'])
    }
 });
  }

}
