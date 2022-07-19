import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Models/AllModels.Models';
import { RoomsService } from 'src/app/Services/Room_service/rooms.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponents implements OnInit {
  
  RoomDetails: Room ={
    id: 0,
    name:'',
    description:''
  }


  constructor(private route:ActivatedRoute, private roomsService: 
    RoomsService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.roomsService.getRoom(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.RoomDetails = response;
              console.log(this.RoomDetails);
            }
          });
        }
      }
    })
  }
  UpdateRoom(){
    this.roomsService.updateRoom(this.RoomDetails.id, this.RoomDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Rooms'])
      }
    });
  }
 
  DeleteRoom(id:number){
    this.roomsService.deleteRoom(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Rooms'])
      }
    });
  }
}
