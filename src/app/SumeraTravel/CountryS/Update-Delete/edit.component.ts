import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Models/AllModels.Models';
import { ContryServiceService } from 'src/app/Services/Country_Service/contry-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  countryDetails: Country = {
    id: 0,
    name:'',
    code:''

  }

  constructor(private route:ActivatedRoute, private contryServiceService: 
    ContryServiceService , private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.contryServiceService.getCounrty(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.countryDetails = response;
              console.log(this.countryDetails);
            }
          });
        }
      }
    })
  }
  UpdateCountry(){
    this.contryServiceService.updateCountry(this.countryDetails.id, this.countryDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['Country'])


      }
    });
  }
 
  DeleteCountry(id:number){
    this.contryServiceService.deleteCountry(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['Country'])
      }
    });

  }
  

}
