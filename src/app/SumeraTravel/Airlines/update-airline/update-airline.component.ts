import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'src/app/Models/AllModels.Models';
import { AirlineServicesService } from 'src/app/Services/Airline_services/airline-services.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {
  AirlineRequest: Airline ={
    id:0,
    code:'',
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


  constructor(private route:ActivatedRoute, private airlineServicesService: 
    AirlineServicesService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.airlineServicesService.getAirline(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.AirlineRequest = response;
              console.log(this.AirlineRequest);
            }
          });
        }
      }
    })
  }
  UpdateAirLine(){
    this.airlineServicesService.updateAirline(this.AirlineRequest.id, this.AirlineRequest)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Airline'])
      }
    });
  }
 
  DeleteAirline(id:number){
    this.airlineServicesService.deleteAirline(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Airline'])
      }
    });
  }
}

 
