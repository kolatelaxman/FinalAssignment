import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locations } from 'src/app/Models/AllModels.Models';
import { LocationService } from 'src/app/Services/Location/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  
  addLocationsRequest: Locations ={
    id: 0,
    locationName:'',
   }

   constructor(private locationService:LocationService, private router: Router ) { }

  ngOnInit(): void {
  }

  AddLocation(){
     console.log("coned");
    this.locationService.addLocation(this.addLocationsRequest)
    .subscribe({ 
     next:(room) => {
      console.log("go to country list");
      this.router.navigate(['Location'])
       }
    });
     }

}
