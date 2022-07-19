import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/Models/AllModels.Models';
import { LocationService } from 'src/app/Services/Location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Locations[] = [];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getAllLocation()
    .subscribe({
      next : (locations) => {
        this.locations = locations;
       },
       error: (response ) => {
        console.log(response);
       }
    })
    }
  }                         


