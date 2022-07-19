import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/AllModels.Models';
import { UsersServiceService } from 'src/app/Services/User_service/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User: Users[] = [];

  constructor(private usersServiceService: UsersServiceService) { }
  ngOnInit(): void {

    this.usersServiceService.getAllUser()
    .subscribe({
      next : (Users) => {
        this.User = Users;
        console.log(Users)
       },
       error: (response ) => {
        console.log(response);
       }
    })
  }
  }


