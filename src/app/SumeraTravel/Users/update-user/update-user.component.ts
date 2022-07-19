import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Models/AllModels.Models';
import { UsersServiceService } from 'src/app/Services/User_service/users-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  UserClass: Users ={
    id: 0,
    firstName:'',
    lastName:'',
    email:'',
    cityRefId:0
  }

  constructor(private route:ActivatedRoute, private usersServiceService: 
   UsersServiceService , private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id');
      console.log("this is :",id);
        if (id) {
          console.log("edit called");
          this.usersServiceService.getUser(id)
          .subscribe({
            next:(response)=>{
              console.log(" inside get by id " + id);
              console.log("observable");
              this.UserClass = response;
              console.log(this.UserClass);
            }
          });
        }
      }
    })
  }
  UpdateUser(){
    this.usersServiceService.updateUser(this.UserClass.id, this.UserClass)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['User'])
      }
    });
  }
  
  DeleteUser(id:number){
    this.usersServiceService.deleteUser(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['User'])
      }
    });
  }
}


