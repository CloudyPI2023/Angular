import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,private router: Router ) { }

  ngOnInit(): void {
    this.getUsers();
  }


private getUsers(){
  this.userService.getUsersList().subscribe(data => {
     this.users = data;

  });
}



}
