import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Models/AllModels.Models';
import { ContryServiceService } from 'src/app/Services/Country_Service/contry-service.service';

@Component({
  selector: 'app-add-counrty',
  templateUrl: './add-counrty.component.html',
  styleUrls: ['./add-counrty.component.css']
})
export class AddCounrtyComponent implements OnInit {

  addcounrtyRequest: Country ={
    id: 0,
    name:'',
    code:''
  };
  constructor(private contryServiceService:ContryServiceService, private router: Router ) { }

  ngOnInit(): void {  
  }

  AddCounrty(){
    console.log("coned");
  this.contryServiceService.addCounrty(this.addcounrtyRequest)
  .subscribe({ 
   next:(country) => {
    console.log("go to country list");
    this.router.navigate(['Country'])
     }
  });
   }
}
