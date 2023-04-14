import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { NgToastComponent } from 'ng-angular-popup';
import { CategoryService } from './category.service';
import { Category } from 'app/Models/category';
import { NgToastService } from 'ng-angular-popup';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  constructor(private cs:CategoryService ,router:Router,private toast: NgToastService) { }
  categories:Category[];
  categoriesArchived:Category[];
  ngOnInit(): void {
    this.getAllCategories();
    
  }
  getAllCategories(){
    this.cs.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
  getAllCategoriesArchived(){
    this.cs.getAllCategoriesArchived().subscribe(data => {
      this.categoriesArchived = data;
    });
  }
  public onUpdateCategory(c: Category) {
    this.cs.updateCategory(c).subscribe(
      (response: Category) => {
        console.log(response);
        this.toast.success({detail:'Success',summary:'Successfully updated !',position:'tr',duration:2000})
        this.getAllCategories();
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        this.toast.error({detail:'Error',summary:'Something wrong !',position:'tr',duration:2000})
      }
    );
  }
  


}
