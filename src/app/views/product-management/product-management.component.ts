import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  productsExpired: Product[];
  productsNotExpired: Product[];
  allProducts:Product[];
  detailsProduct?:Product;

  constructor(private ps:ProductService,router:Router,private toast: NgToastService) { }


  ngOnInit(): void {
    this.getAllProducts();
  }
  private getAllProducts(){
    this.ps.getAllProducts().subscribe(data => {
      this.allProducts = data;
    });
  }

  public OnDetailsProduct(idProduct: number){
    this.ps.OnDetailsProduct(idProduct).subscribe(
      (response: Product) => {
        console.log(response);
      });
  }

  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if(mode == 'details'){
      this.detailsProduct = product;
      button.setAttribute('data-target', '#productDetailsModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getDateDiffInDays(dateString1: string): number {
    const date1 = new Date(dateString1);
    const date2 = new Date();
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}
