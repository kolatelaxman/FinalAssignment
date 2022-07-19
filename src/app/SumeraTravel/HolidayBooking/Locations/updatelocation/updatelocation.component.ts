import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locations } from 'src/app/Models/AllModels.Models';
import { LocationService } from 'src/app/Services/Location/location.service';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrls: ['./updatelocation.component.css']
})
export class UpdatelocationComponent implements OnInit {
  
  addLocationsDetails: Locations ={
    id: 0,
    locationName:'',
   }


    
  constructor(private route:ActivatedRoute, private locationService: 
    LocationService , private router:Router) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.locationService.getLocation(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.addLocationsDetails = response;
              console.log(this.addLocationsDetails);
            }
          });
        }
      }
    })
  }
  UpdateLocation(){
    this.locationService.updateLocaton(this.addLocationsDetails.id, this.addLocationsDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Location'])
      }
    });
  }
 
  DeleteLocation(id:number){
    this.locationService.deleteDelete(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Location'])
      }
    });
  }
  }

