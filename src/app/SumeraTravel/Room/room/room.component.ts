import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/AllModels.Models';
import { RoomsService } from 'src/app/Services/Room_service/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  this.roomsService.getAllRoom()
  .subscribe({
    next : (room) => {
      this.rooms = room;
     },
     error: (response ) => {
      console.log(response);
     }
  })
  }
}
