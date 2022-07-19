import { Component, OnInit } from '@angular/core';
import { HotelAmenities } from 'src/app/Models/AllModels.Models';
import { HotelAmenitiesServiceService } from 'src/app/Services/HotelAmenities/hotel-amenities-service.service';

@Component({
  selector: 'app-room-amenities',
  templateUrl: './room-amenities.component.html',
  styleUrls: ['./room-amenities.component.css']
})
export class RoomAmenitiesComponent implements OnInit {

     
  hotels: HotelAmenities[] = [];

  constructor(private  hotelAmenitiesServiceService: HotelAmenitiesServiceService) { }

 
  ngOnInit(): void {
    this.hotelAmenitiesServiceService.getAllHotelAmenities()
    .subscribe({
      next : (hotel) => {
        this.hotels = hotel;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }
  

