import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelRoom } from 'src/app/Models/AllModels.Models';
import { HotelRoomServiceService } from 'src/app/Services/HotelRoom_Service/hotel-room-service.service';

@Component({
  selector: 'app-add-hotel-room',
  templateUrl: './add-hotel-room.component.html',
  styleUrls: ['./add-hotel-room.component.css']
})
export class AddHotelRoomComponent implements OnInit {



  
  addRoomHotelRequest: HotelRoom ={
    id: 0,
    hotelRefId:0,
    roomRefId:0,
    perNight:0,
    perDay:0,
    perDayNight:0
  }

  constructor(private hotelRoomServiceService:HotelRoomServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  
  AddHotelRoom(){
    alert("Save ")
   console.log("coned");
   this.hotelRoomServiceService.addHotelRoom(this.addRoomHotelRequest)
  .subscribe({ 
   next:(hotelRoom) => {
    console.log("go to country list");
    this.router.navigate(['Hotel_roomAmenities'])
     }
  });
   }

}
