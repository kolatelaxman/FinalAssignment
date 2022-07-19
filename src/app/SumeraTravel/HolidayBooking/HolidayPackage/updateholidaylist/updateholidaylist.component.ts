import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidayPackagr } from 'src/app/Models/AllModels.Models';
import { HolidaypackageServiceService } from 'src/app/Services/HolidayPakage/holidaypackage-service.service';

@Component({
  selector: 'app-updateholidaylist',
  templateUrl: './updateholidaylist.component.html',
  styleUrls: ['./updateholidaylist.component.css']
})
export class UpdateholidaylistComponent implements OnInit {

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

 
   constructor(private route:ActivatedRoute, private lolidaypackageServiceService: 
    HolidaypackageServiceService , private router:Router) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.lolidaypackageServiceService.getHoliday(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.addHolidayPackagrditail = response;
              console.log(this.addHolidayPackagrditail);
            }
          });
        }
      }
    })
  }
  UpdateHoliday(){
    this.lolidaypackageServiceService.updateHoliday(this.addHolidayPackagrditail.holidaypackageId, this.addHolidayPackagrditail)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['HolidayPackge'])
      }
    });
  }
 
  DeleteHoliday(id:number){
    this.lolidaypackageServiceService.deleteDelete(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['HolidayPackge'])
      }
    });
  }

}
