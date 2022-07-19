import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityServiceService } from 'src/app/Services/Citys_service/cityservice.service';
import { City } from 'src/app/Models/AllModels.Models';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {
  cityDetails: City = {
    id: 0,
    name:'',
    countryRefId:0
  }
 
  constructor(private route:ActivatedRoute, private cityServiceService: 
    CityServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.cityServiceService.getCity(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.cityDetails = response;
              console.log(this.cityDetails);
            }
          });
        }
      }
    })
  }
  UpdateCity(){
    this.cityServiceService.updateCity(this.cityDetails.id, this.cityDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['City'])
      }
    });
  }

  DeleteCity(id:number){
    this.cityServiceService.deleteCity(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['City'])
      }
    });
  }

}