import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/Models/AllModels.Models';
import { RoomsService } from 'src/app/Services/Room_service/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  
  addRoomRequest: Room ={
    id: 0,
    name:'',
    description:''
  }

  constructor(private roomsService:RoomsService, private router: Router ) { }

  ngOnInit(): void {
  }

  AddRoom(){
  alert()
  console.log("coned");
  this.roomsService.addRoom(this.addRoomRequest)
  .subscribe({ 
   next:(room) => {
    console.log("go to country list");
    this.router.navigate(['Rooms'])
     }
  });
   }
}
