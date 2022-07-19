import { Component, OnInit } from '@angular/core';
import { HotelRoom } from 'src/app/Models/AllModels.Models';
import { HotelRoomServiceService } from 'src/app/Services/HotelRoom_Service/hotel-room-service.service';

@Component({
  selector: 'app-room-hotel',
  templateUrl: './room-hotel.component.html',
  styleUrls: ['./room-hotel.component.css']
})
export class RoomHotelComponent implements OnInit {

  hotelroom: HotelRoom[] = [];


  constructor(private  hotelRoomServiceService: HotelRoomServiceService) { }

  ngOnInit(): void {

    this.hotelRoomServiceService.getAllHotelRoom()
    .subscribe({
      next : (hotelroom) => {
        this.hotelroom = hotelroom;
       },
       error: (response ) => {
        console.log(response);
       }
    })
  }

}
