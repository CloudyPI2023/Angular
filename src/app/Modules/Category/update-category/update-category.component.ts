import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  

  idCategory: number;
  category: Category = new Category();
  constructor(private cs: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  
    this.idCategory = this.route.snapshot.params['idCategory'];

    this.cs.getCategoryById(this.idCategory).subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cs.updateCategory(this.idCategory, this.category).subscribe( data =>{
      this.goToCategoryList();
    }
    , error => console.log(error));
  }

  goToCategoryList(){
    this.router.navigate(['/categories']);
  }
  ///////////////
}
