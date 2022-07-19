import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayBooking } from 'src/app/Models/AllModels.Models';
import { HolidayserviceService } from 'src/app/Services/HolidayBookingservice/holidayservice.service';

@Component({
  selector: 'app-add-holiday-booking',
  templateUrl: './add-holiday-booking.component.html',
  styleUrls: ['./add-holiday-booking.component.css']
})
export class AddHolidayBookingComponent implements OnInit {


  addHolidayBookingrequst: HolidayBooking ={
    id:0,
    holidayPakageId:0,
    userId:0,
    bookingDate:''
  }

  constructor(private holidayserviceService:HolidayserviceService, private router: Router ) { }

  ngOnInit(): void {
  }
  AddHoliday(){
    console.log("coned");
   this.holidayserviceService.addHolidayBooking(this.addHolidayBookingrequst)
   .subscribe({ 
    next:(room) => {
     console.log("go to country list");
     this.router.navigate(['HolidayBooking'])
      }
   });
    }
}
