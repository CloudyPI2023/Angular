import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'app/Models/category';
import { Reclamation } from 'app/Models/reclamation';
import { CategoryService } from 'app/services/category.service';
import { ReclamationService } from 'app/services/reclamation.service';
import { Product } from '../../Models/product';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  categories: Category[];
  reclamations: Reclamation[];
  category: Category = new Category();

  constructor(private ps: ProductService,private cs:CategoryService,private rs:ReclamationService,
    private router: Router) { }

  ngOnInit(): void {
    //this.getALL();
    this.getCategories();
    this.getProducts();
    this.getReclamations();
  }

  private getProducts(){
    this.ps.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  private getReclamations(){
    this.rs.getAllReclamations().subscribe(data => {
      this.reclamations = data;
    });
  }

   getCategories(){
    this.cs.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
  /* deleteCategory( idCategory: any){
    this.cs.deleteCategory(idCategory).subscribe(() => this.getCategories());
  }*/

  AddCategory(category:any){
    this.cs.createCategory(this.category).subscribe( data =>{
      console.log(data);
      this.getCategories();
    },
    error => console.log(error));
  }
  
}
