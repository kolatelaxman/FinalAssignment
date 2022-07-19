import { Component, OnInit } from '@angular/core';
import { AmenitiesServiceService } from 'src/app/Services/Amenities_Service/amenities-service.service';
import { Amenities } from 'src/app/Models/AllModels.Models';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  amenities: Amenities[] = [];

  constructor(private  amenitiesServiceService: AmenitiesServiceService) {}

  ngOnInit(): void {
    this.amenitiesServiceService.getAllAmenities()
      .subscribe({
        next : (amenities) =>{
          this.amenities = amenities;
        },
      error: (response) => {
        console.log(response)
      }
      })
  }
}
