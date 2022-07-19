import { Component, OnInit } from '@angular/core';
import { HolidayPackagr } from 'src/app/Models/AllModels.Models';
import { HolidaypackageServiceService } from 'src/app/Services/HolidayPakage/holidaypackage-service.service';

@Component({
  selector: 'app-holiday-packge',
  templateUrl: './holiday-packge.component.html',
  styleUrls: ['./holiday-packge.component.css']
})
export class HolidayPackgeComponent implements OnInit {

  HolidayPackagr: HolidayPackagr[] = [];


  constructor(private holidaypackageServiceService: HolidaypackageServiceService) { }

  ngOnInit(): void {
    this.holidaypackageServiceService.getAllHolidayp()
    .subscribe({
      next : (HolidayPackagr) => {
        this.HolidayPackagr = HolidayPackagr;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }


