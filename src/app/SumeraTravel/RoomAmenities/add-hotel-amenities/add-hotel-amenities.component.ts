import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelAmenities } from 'src/app/Models/AllModels.Models';
import { HotelAmenitiesServiceService } from 'src/app/Services/HotelAmenities/hotel-amenities-service.service';

@Component({
  selector: 'app-add-hotel-amenities',
  templateUrl: './add-hotel-amenities.component.html',
  styleUrls: ['./add-hotel-amenities.component.css']
})
export class AddHotelAmenitiesComponent implements OnInit {

  addhotelAmenitiesRequest: HotelAmenities ={
    id: 0,
    hotelRefId:0,
    amenitieRefId:0
  }


  constructor(private hotelAmenitiesServiceService:HotelAmenitiesServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  
  AddHotelAmenities(){
    alert("save")
    console.log("coned");
  this.hotelAmenitiesServiceService.addHotelAmenities(this.addhotelAmenitiesRequest)
  .subscribe({ 
   next:(hotel) => {
    console.log("go to country list");
    this.router.navigate(['HotelAmenities'])
     }
  });
   }

}
