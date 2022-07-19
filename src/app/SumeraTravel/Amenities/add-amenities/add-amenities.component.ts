import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmenitiesServiceService } from 'src/app/Services/Amenities_Service/amenities-service.service';
import { Amenities } from 'src/app/Models/AllModels.Models';

@Component({
  selector: 'app-add-amenities',
  templateUrl: './add-amenities.component.html',
  styleUrls: ['./add-amenities.component.css']
})
export class AddAmenitiesComponent implements OnInit {

  addAmenitiesRequest: Amenities ={
    id: 0,
    name:'',
    description:''
  }

  constructor(private amenitiesServiceService:AmenitiesServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  AddAmenities(){
    console.log("coned");
  this.amenitiesServiceService.addAmenities(this.addAmenitiesRequest)
  .subscribe({ 
   next:(citys) => {
    console.log("go to country list");
    this.router.navigate(['Amenities'])
     }
  });
   }


}
