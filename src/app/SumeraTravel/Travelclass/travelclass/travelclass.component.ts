import { Component, OnInit } from '@angular/core';
import { TravelClass } from 'src/app/Models/AllModels.Models';
import { TravelServiceService } from 'src/app/Services/Travel_Service/travel-service.service';

@Component({
  selector: 'app-travelclass',
  templateUrl: './travelclass.component.html',
  styleUrls: ['./travelclass.component.css']
})
export class TravelclassComponent implements OnInit {

  Travel: TravelClass[] = [];


  constructor(private travelServiceService: TravelServiceService) { }
  ngOnInit(): void {
    this.travelServiceService.getAllTravel()
    .subscribe({
      next : (Travels) => {
        this.Travel = Travels;
       },
       error: (response ) => {
        console.log(response);
       }
    })
  }
}
