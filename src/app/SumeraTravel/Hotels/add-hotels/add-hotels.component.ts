import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { Hotel } from 'src/app/Models/AllModels.Models';
import { HotelsServiceService } from 'src/app/Services/Hotels_service/hotels-service.service';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent implements OnInit {


  addhotelRequest: Hotel ={
    id: 0,
    name:'',
    star:0,
    cityRefId:0,
    image:'',
    description:''
  }
  constructor(private hotelServiceService:HotelsServiceService, private router: Router ) { }
  ngOnInit(): void {
  }
  AddHotel(){
    alert()
    console.log("coned");
  this.hotelServiceService.addHotel(this.addhotelRequest)
  .subscribe({ 
   next:(hotel) => {
    console.log("go to country list");
    this.router.navigate(['Hotel'])
     }
  });
   }

}










// AddCounrty(){
//   console.log("coned");
// this.contryServiceService.addCounrty(this.addcounrtyRequest)
// .subscribe({ 
//  next:(country) => {
//   console.log("go to country list");
//   this.router.navigate(['Country'])
//    }
// });
//  }
// }
