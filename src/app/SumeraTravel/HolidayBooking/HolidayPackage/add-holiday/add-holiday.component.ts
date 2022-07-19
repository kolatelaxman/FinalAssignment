import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayPackagr } from 'src/app/Models/AllModels.Models';
import { HolidaypackageServiceService } from 'src/app/Services/HolidayPakage/holidaypackage-service.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {
  
  addHolidayPackagrditail: HolidayPackagr ={
    holidaypackageId: 0,
    from_locationRefId:0,
    to_locationRefId:0,
    image:'',
    hotel_ref_id:0,
     holidaypackagePrice:0,
    guestNo:0,
    description:'',
    dateTime:'',

   }


   constructor(private holidaypackageServiceService:HolidaypackageServiceService, private router: Router ) { }

   ngOnInit(): void {
  }
  AddHoliday(){
    console.log("coned");
   this.holidaypackageServiceService.addHoliday(this.addHolidayPackagrditail)
   .subscribe({ 
    next:(room) => {
     console.log("go to country list");
     this.router.navigate(['HolidayPackge'])
      }
   });
    }


}
