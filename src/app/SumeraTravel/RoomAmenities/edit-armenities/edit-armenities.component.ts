import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelAmenities } from 'src/app/Models/AllModels.Models';
import { HotelAmenitiesServiceService } from 'src/app/Services/HotelAmenities/hotel-amenities-service.service';

@Component({
  selector: 'app-edit-armenities',
  templateUrl: './edit-armenities.component.html',
  styleUrls: ['./edit-armenities.component.css']
})
export class EditArmenitiesComponent implements OnInit {

  addhotelAmenitiesRequest: HotelAmenities ={
    id: 0,
    hotelRefId:0,
    amenitieRefId:0
  }

  constructor(private route:ActivatedRoute, private hotelAmenitiesServiceService: 
    HotelAmenitiesServiceService , private router:Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.hotelAmenitiesServiceService.getHotelAmenities(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.addhotelAmenitiesRequest = response;
              console.log(this.addhotelAmenitiesRequest);
            }
          });
        }
      }
    })
  }
  UpdateHotelAmenities(){
    this.hotelAmenitiesServiceService.updateHotelAmenities(this.addhotelAmenitiesRequest.id, this.addhotelAmenitiesRequest)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['HotelAmenities'])


      }
    });
  }
 
  DeleteHotelAmenities(id:number){
    this.hotelAmenitiesServiceService.deleteHotelAmenities(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['HotelAmenities'])
      }
    });

  }

}

  


