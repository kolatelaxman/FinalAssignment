import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { Hotel } from 'src/app/Models/AllModels.Models';
import { HotelsServiceService } from 'src/app/Services/Hotels_service/hotels-service.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponents implements OnInit {
  

  HotelDetails: Hotel ={
    id: 0,
    name:'',
    star:0,
    cityRefId:0,
    image:'',
    description:''
  }

  constructor(private route:ActivatedRoute, private hotelServiceService: 
    HotelsServiceService , private router:Router) { }

   
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.hotelServiceService.getHotel(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.HotelDetails = response;
              console.log(this.HotelDetails);
            }
          });
        }
      }
    })
  }
  UpdateHotel(){
    this.hotelServiceService.updateHotel(this.HotelDetails.id, this.HotelDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Location'])


      }
    });
  }
 
  DeleteHotel(id:number){
    this.hotelServiceService.deleteHotel(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Location'])
      }
    });

  }

}
