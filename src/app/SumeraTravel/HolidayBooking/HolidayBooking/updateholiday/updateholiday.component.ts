import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidayBooking } from 'src/app/Models/AllModels.Models';
import { HolidayserviceService } from 'src/app/Services/HolidayBookingservice/holidayservice.service';

@Component({
  selector: 'app-updateholiday',
  templateUrl: './updateholiday.component.html',
  styleUrls: ['./updateholiday.component.css']
})
export class UpdateholidayComponent implements OnInit {
  
  addHolidayBookingrequst: HolidayBooking ={
    id:0,
    holidayPakageId:0,
    userId:0,
    bookingDate:''
  }

 
  constructor(private route:ActivatedRoute, private holidayserviceService: 
    HolidayserviceService , private router:Router) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.holidayserviceService.getHolidayBooking(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.addHolidayBookingrequst = response;
              console.log(this.addHolidayBookingrequst);
            }
          });
        }
      }
    })
  }
  UpdateHolidayBooking(){
    this.holidayserviceService.updateHolidayBooking(this.addHolidayBookingrequst.id, this.addHolidayBookingrequst)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['HolidayBooking'])
      }
    });
  }
 
  DeleteLocation(id:number){
    this.holidayserviceService.deleteDelete(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['HolidayBooking'])
      }
    });
  }
  }