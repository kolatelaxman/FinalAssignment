import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from 'src/app/Models/AllModels.Models';
import { AirportServiceService } from 'src/app/Services/Airport_services/airport-service.service';

@Component({
  selector: 'app-update-airport',
  templateUrl: './update-airport.component.html',
  styleUrls: ['./update-airport.component.css']
})
export class UpdateAirportComponent implements OnInit {

   
  AirportRequest: Airport ={
    id:0,
    name:'',
    shortName:'',
    cityRefId:0,
    pincode:0,
    logo:'',
    address1:'',
    address2:'',
    address3:'',
    telephone:'',
    telephone2:'',
    email:'',
    email2:''
  }

  constructor(private route:ActivatedRoute, private airportServiceService: 
    AirportServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.airportServiceService.getAirport(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.AirportRequest = response;
              console.log(this.AirportRequest);
            }
          });
        }
      }
    })
  }
  UpdateAirport(){
    this.airportServiceService.updateAirport(this.AirportRequest.id, this.AirportRequest)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['airport'])
      }
    });
  }
 
  DeleteAirport(id:number){
    this.airportServiceService.deleteAirport(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['airport'])
      }
    });
  }
}
