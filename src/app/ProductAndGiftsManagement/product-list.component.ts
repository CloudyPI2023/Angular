import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'app/Models/category';
import { Gift } from 'app/Models/gift';
import { Reclamation } from 'app/Models/reclamation';
import { CategoryService } from 'app/services/category.service';
import { GiftService } from 'app/services/gift.service';
import { ReclamationService } from 'app/services/reclamation.service';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  categories: Category[];
  categoriesArchived:Category[];
  categoriesCancelArchived:Category[];
  reclamations: Reclamation[];
  gifts:Gift[];
  category: Category = new Category();
  myForm: FormGroup;

  constructor(private ps: ProductService,private cs:CategoryService,private rs:ReclamationService,private gs:GiftService,
    private router: Router,private fb: FormBuilder) { 
      this.myForm = this.fb.group({
        myInput: ['', Validators.required]

      });
    }

  ngOnInit(): void {
    //this.getALL();
    this.getCategories();
    this.getProducts();
    this.getReclamations();
    this.getGifts();
    this.getAllCategoriesArchived();
    //this.getAllCategoriesCancelArchived();
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
  getAllCategoriesArchived(){
    this.cs.getAllCategoriesArchived().subscribe(data => {
      this.categoriesArchived = data;
    });
  }

  getGifts(){
    this.gs.getAllGifts().subscribe(data => {
      this.gifts = data;
    });
  }

  deleteCategory( idCategory: any){
    this.cs.deleteCategory(idCategory).subscribe(() => this.getCategories());
  }

  AddCategory(category:any){
    console.log(category.nameCategory);
    if(category.nameCategory!=null||category.nameCategory!=''){
    this.cs.createCategory(this.category).subscribe( data =>{
      console.log(data);
      this.getCategories();
    },
    error => console.log(error));}
  }

 valider(ca:Category)
  {
   if ((ca.nameCategory==null) && (ca.descriptionCategory==null)){
    alert("Please verify fileds")
    return false;
   }
  }
  
  updateCategory(category:any){
    this.cs.updateCategory(category).subscribe(data=>{
      console.log(data);
      this.getCategories();
    })
  }
  setArchivedCategory(category:any){
    this.cs.setArchivedCategory(category).subscribe(data=>{
      console.log(data);
      this.getCategories();
      this.getAllCategoriesArchived();
    })
  }
  setArchivedCancelCategory(category:any){
    this.cs.setArchivedCancelCategory(category).subscribe(data=>{
      console.log(data);
      this.getCategories();
      this.getAllCategoriesArchived();
    })
  }

}
