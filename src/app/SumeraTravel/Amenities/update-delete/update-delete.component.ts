import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmenitiesServiceService } from 'src/app/Services/Amenities_Service/amenities-service.service';
import { Amenities } from 'src/app/Models/AllModels.Models';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateComponent implements OnInit {
  addAmenitiesRequest: Amenities ={
    id: 0,
    name:'',
    description:''
  }

  constructor(private route:ActivatedRoute, private amenitiesServiceService: 
    AmenitiesServiceService , private router:Router) { }

 
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
         const id = params.get('id');
        console.log("this is :",id);
          if (id) {
            console.log("edit called");
            this.amenitiesServiceService.getAmenitis(id)
            .subscribe({
              next:(response)=>{
                console.log(" inside get by id " + id);
                console.log("observable");
                this.addAmenitiesRequest = response;
                console.log(this.addAmenitiesRequest);
              }
            });
          }
        }
      })
    }
    UpdateAmenitis(){
      this.amenitiesServiceService.updateAmenitis(this.addAmenitiesRequest.id, this.addAmenitiesRequest)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['Amenities'])
        }
      });
    }
  
    DeleteAmenitis(id:number){
      this.amenitiesServiceService.deleteAmenitis(id)
      .subscribe({
        next:(response)=>{
          this.router.navigate(['Amenities'])
        }
      });
    }
  }