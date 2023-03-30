import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../Models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  
  categories: Category[];

  constructor(private cs: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.cs.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  categoryDetails(idCategory: number){
    this.router.navigate(['category-details', idCategory]);
  }

  updateCategory(idCategory: number){
    this.router.navigate(['update-category', idCategory]);
  }

  deleteCategory(idCategory: number){
    this.cs.deleteCategory(idCategory).subscribe( data => {
      console.log(data);
      this.getCategories();
    })
  }

}
