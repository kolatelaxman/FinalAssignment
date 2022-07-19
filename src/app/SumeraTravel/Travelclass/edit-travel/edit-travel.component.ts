import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelClass } from 'src/app/Models/AllModels.Models';
import { TravelServiceService } from 'src/app/Services/Travel_Service/travel-service.service';

@Component({
  selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
})
export class EditTravelComponent implements OnInit {
  travelClass: TravelClass ={
    id: 0,
    name:'',
  }
  constructor(private route:ActivatedRoute, private travelServiceService: 
  TravelServiceService , private router:Router) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
     const id = params.get('id');
    console.log("this is :",id);
      if (id) {
        console.log("edit called");
        this.travelServiceService.getTravel(id)
        .subscribe({
          next:(response)=>{
            console.log(" inside get by id " + id);
            console.log("observable");
            this.travelClass = response;
            console.log(this.travelClass);
          }
        });
      }
    }
  })
}
UpdateTravel(){
  this.travelServiceService.updateTravel(this.travelClass.id, this.travelClass)
  .subscribe({
    next:(response) =>{
      this.router.navigate(['Travel'])
    }
  });
}

DeleteTravel(id:number){
  this.travelServiceService.deleteTravel(id)
  .subscribe({
    next:(response)=>{
      this.router.navigate(['Travel'])
    }
  });

}
}
