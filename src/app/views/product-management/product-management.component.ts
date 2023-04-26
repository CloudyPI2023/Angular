import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Product } from '../../Models/product';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';
import { Category } from 'app/Models/category';
import { log } from 'util';



export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: any[];
  labels: any;
};



@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
 
})
export class ProductManagementComponent implements OnInit {

  hashMapProductCategory:  Map<String, number> = new Map<string, number>();
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
    
 result!:any[]
  productsExpired: Product[];
  productsNotExpired: Product[];
  allProducts:Product[];
  detailsProduct?:Product;
  keys!:any[]
  values!:any[]
  

  constructor(private ps:ProductService,router:Router,private toast: NgToastService) 
  {
    this.statisticsProductCategory();

   }

 

  ngOnInit(): void {         
    this.getAllProducts();

    console.log(this.keys);
    
   
  
    
    
  }
 
  private statisticsProductCategory(){
    this.ps.statisticsProductCategory().subscribe(data=>{
      console.log(data);
      
      this.keys = Object.keys(data);
      this.values = Object.values(data);
      console.log(this.keys);
      console.log(this.values[0]);
      this.chartOptions = {
        series:this.values,
        chart: {
          type: "donut"
        },
        labels:this.keys,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
      
      
    
      //const arraykeys=[...this.hashMapProductCategory.keys()];
      //const arrayvalues=[...this.hashMapProductCategory.values()];



      //this.chartLabels=arraykeys;
      //this.chartSeries=arrayvalues;
      console.log(this.hashMapProductCategory);
    })
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

  public getDateDiffInDays(dateString1: string,c:Category): String {
    const date1 = new Date(dateString1);
    const date2 = new Date();
    const diffMs = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if((date2< date1)&&(c.archived)){
      return "Still available for "+diffDays+" days."+"\n"+
          "Category is archived";
    }
    if((date2< date1)&&(!c.archived)){
      return "Still available for "+diffDays+" days."+"\n"+
          "Category is available";
    }
    else{
    return "Expired "+diffDays+" days ago.";
    }
  }
}
