import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/AllModels.Models';
import { UsersServiceService } from 'src/app/Services/User_service/users-service.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  UserClass: Users ={
    id: 0,
    firstName:'',
    lastName:'',
    email:'',
    cityRefId:0
  }

  constructor(private usersServiceService:UsersServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  AddUser(){
    alert("save")
    console.log("coned");
  this.usersServiceService.addUser(this.UserClass)
  .subscribe({ 
   next:(addUser) => {
    console.log("go to country list");
    this.router.navigate(['User'])
     }
  });
  }

}
