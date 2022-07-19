import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelRoom } from 'src/app/Models/AllModels.Models';
import { HotelRoomServiceService } from 'src/app/Services/HotelRoom_Service/hotel-room-service.service';

@Component({
  selector: 'app-edit-hotelroom',
  templateUrl: './edit-hotelroom.component.html',
  styleUrls: ['./edit-hotelroom.component.css']
})
export class EditHotelroomComponent implements OnInit {
  
  
  addRoomHotelRequest: HotelRoom ={
    id: 0,
    hotelRefId:0,
    roomRefId:0,
    perNight:0,
    perDay:0,
    perDayNight:0
  }

  constructor( private route:ActivatedRoute, private hotelRoomServiceService: 
    HotelRoomServiceService , private router:Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.hotelRoomServiceService.getHotelRoom(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.addRoomHotelRequest = response;
              console.log(this.addRoomHotelRequest);
            }
          });
        }
      }
    })
  }
  UpdateHotelRoom(){
    this.hotelRoomServiceService.updateHotelRoom(this.addRoomHotelRequest.id, this.addRoomHotelRequest)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Hotel_roomAmenities'])


      }
    });
  }
 
  DeleteHotelRoom(id:number){
    this.hotelRoomServiceService.deleteHotelRoom(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Hotel_roomAmenities'])
      }
    });

  }

 
  }


