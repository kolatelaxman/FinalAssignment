import { Component, OnInit } from '@angular/core';
import { HolidayBooking,  } from 'src/app/Models/AllModels.Models';
import { HolidayserviceService } from 'src/app/Services/HolidayBookingservice/holidayservice.service';

@Component({
  selector: 'app-holiday-booking',
  templateUrl: './holiday-booking.component.html',
  styleUrls: ['./holiday-booking.component.css']
})
export class HolidayBookingComponent implements OnInit {
  HolidayBooking: HolidayBooking[] = [];


  searchText:any
   

 
  constructor(private holidayserviceService: HolidayserviceService) { }
 
  ngOnInit(): void {
    this.holidayserviceService.getAllHolidayBooking()
    .subscribe({
      next : (HolidayBooking) => {
        this.HolidayBooking = HolidayBooking;
       },
       error: (response ) => {
        console.log(response);
       }
    })
     
    }
    Search(){
      if (this.searchText == this.HolidayBooking){
        this.ngOnInit();
      }
      else{
        this.HolidayBooking = this.HolidayBooking.filter(res =>{
          var result= res.id ==this.searchText.HolidayBooking.id;
          return result;
        });
      }
    }
}

 
