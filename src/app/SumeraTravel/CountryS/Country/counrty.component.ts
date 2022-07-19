import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/AllModels.Models';
import { ContryServiceService } from 'src/app/Services/Country_Service/contry-service.service';

@Component({
  selector: 'app-counrty',
  templateUrl: './counrty.component.html',
  styleUrls: ['./counrty.component.css']
})
export class CounrtyComponent implements OnInit {

  country: Country[] = [];

constructor(private contryServiceService: ContryServiceService) { }

ngOnInit(): void {

this.contryServiceService.getAllCounrty()
.subscribe({
  next : (country) => {
    this.country = country;
   },
   error: (response ) => {
    console.log(response);
   }
})
}



}