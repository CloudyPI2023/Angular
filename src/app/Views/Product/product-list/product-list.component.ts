import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../Models/product';
import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private ps: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.ps.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

}
