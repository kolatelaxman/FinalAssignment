import { Component, OnInit } from '@angular/core';
 import { Hotel } from 'src/app/Models/AllModels.Models';
import { HotelsServiceService } from 'src/app/Services/Hotels_service/hotels-service.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotel: Hotel[] = [];

  constructor(private hotelServiceService: HotelsServiceService) { }

ngOnInit(): void {
  this.hotelServiceService.getAllHotel()
  .subscribe({
    next : (hotel) => {
      this.hotel = hotel;
     },
     error: (response ) => {
      console.log(response);
     }
  })
}
}
