import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../Models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();
  constructor(private cs: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.cs.createCategory(this.category).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.category);
    this.saveEmployee();
  }
}

