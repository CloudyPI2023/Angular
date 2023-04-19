import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { data } from 'jquery';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
  selectedFile: File;

  userFile : any;
  public imagePath: any;
  imgURL: any;
  public message: string;



  pageSize = 4; // maximum number of items to display per page
  totalPages: number; // total number of pages
  currentPage = 1; // current page number

  constructor(private userService: UserService,private router: Router,private toast: NgToastService,private httpClient: HttpClient ) { }

  ngOnInit(): void {

    if(localStorage.getItem('token') == null){
       this.toast.error({detail:'Error',summary:'You are not allowed ! ',position:'tr',duration:2000})
       this.router.navigateByUrl('/login');
       }
    this.getUsers();

    this.totalPages = Math.ceil(this.users.length / this.pageSize);
        
    
  }
  totalPagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  onPageChange(pageNumber: number) {
  if (pageNumber < 1 || pageNumber > this.totalPages) {
    return; // Do nothing if page number is out of range
  }
  this.currentPage = pageNumber;
  // Fetch items from the database based on the current page number and items per page
  // ...
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

onFileSelected(event : any) {
  console.log(event);
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}

}

/*onUpload() {
  console.log(this.selectedFile);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );


}*/



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
