import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { data } from 'jquery';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public editUser?: User;
  public deleteUser?: User;
  public detailsUser?: User;
  users: User[];

  constructor(private userService: UserService,private router: Router,private toast: NgToastService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('token') != null){
      // alert("you are not allowed")
       this.router.navigateByUrl('/users');
       }

    this.getUsers();
  }


private getUsers(){
  this.userService.getUsersList().subscribe(data => {
     this.users = data;

  });
}

public OnDetailsUser(idUser: number){
  this.userService.getUserById(idUser).subscribe(
    (response: User) => {
      console.log(response);
    });
}

public onAddUser(addForm: NgForm): void {
  document.getElementById('add-User-form')!.click();
  this.userService.createUser(addForm.value).subscribe(
    (response: User) => {
      console.error
      console.log(response);
      this.getUsers();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onUpdateUser(user: User) {
  this.userService.updateUser(user).subscribe(
    (response: User) => {
      console.log(response);
      this.toast.success({detail:'Success',summary:'Successfully updated !',position:'tr',duration:2000})
      this.getUsers();
    },
    (error: HttpErrorResponse) => {
      //alert(error.message);
      this.toast.error({detail:'Error',summary:'Something wrong !',position:'tr',duration:2000})
    }
  );
}

public onDeleteUser(idUser: number): void {
  this.userService.deleteUser(idUser).subscribe(() => { 
    
    this.toast.success({detail:'Success',summary:'Successfully deleted !',position:'tr',duration:2000})

    this.getUsers() }

  ),
  (error: HttpErrorResponse) => {
    //alert(error.message);
    this.toast.error({detail:'Error',summary:'Something wrong !',position:'tr',duration:2000})

  };
}

public onOpenModal(user: User, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'edit') {
    this.editUser = user;
    button.setAttribute('data-target', '#updateUserModal');
  }
  if (mode === 'delete') {
    this.deleteUser = user;
    button.setAttribute('data-target', '#deleteUserModal');
  }
  if(mode == 'details'){
    this.detailsUser = user;
    button.setAttribute('data-target', '#userDetailsModal');
  }
  if (mode === 'add') {

    button.setAttribute('data-target', '#addUserModal');
  }
  container?.appendChild(button);
  button.click();
}


}
