import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelClass } from 'src/app/Models/AllModels.Models';
import { TravelServiceService } from 'src/app/Services/Travel_Service/travel-service.service';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  travelClass: TravelClass ={
    id: 0,
    name:'',
  }
  constructor(private travelServiceService:TravelServiceService, private router: Router ){}
  ngOnInit(): void {
  }
  
  AddTravel(){
    alert("save")
    console.log("coned");
  this.travelServiceService.addTravel(this.travelClass)
  .subscribe({ 
   next:(addTravel) => {
    console.log("go to country list");
    this.router.navigate(['Travel'])
     }
  });
   }
}
