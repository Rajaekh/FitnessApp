import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.servie';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users); // You can do further processing with the users here
    });
  }
  searchUser(){

  }
  deleteUser(){}
}

