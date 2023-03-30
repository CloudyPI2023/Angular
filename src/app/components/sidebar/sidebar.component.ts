import { Component, OnInit } from '@angular/core';
import { CategoryListComponent } from 'app/Views/Category/category-list/category-list.component';
import { GiftListComponent } from 'app/Views/Gift/gift-list/gift-list.component';
import { ProductListComponent } from 'app/Views/Product/product-list/product-list.component';


declare const $: any;
declare interface RouteInfo {
    path?: string;
    title: string;
    icon: string;
    class: string;
    component: any;
    children?:RouteInfo[];

}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' ,component:'',children:[]},
    { path: '/user-profile', title: 'User management',  icon:'person', class: '',component:'',children:[] },
    {  title: 'Product and gifts',  icon:'content_paste', class: '',component:'' ,children: [
      {
        path: "/all-products",
        title:'All products',
        icon:'dashboard',
        class:'',
        component: ProductListComponent,
       
      },
      { 
        path: "/all-categories",
        title:'All categories',
        icon:'dashboard',
        class:'',
        component: CategoryListComponent,
  
      },
      {
        path: "/all-gifts",
        title:'All gifts',
        icon:'dashboard',
        class:'',
        component: GiftListComponent,
      }
    ]},
    { path: '/typography', title: 'Donation and association',  icon:'library_books', class: '',component:'', children:[]},
    { path: '/icons', title: 'Event and reservation',  icon:'bubble_chart', class: '' ,component:'',children:[]},
    { path: '/maps', title: 'Article and comment',  icon:'location_on', class: '',component:'',children:[] },
    { path: '/notifications', title: 'Pruchase and order',  icon:'notifications', class: '',component:'',children:[] },
    { path: '/upgrade', title: 'Contact',  icon:'unarchive', class: 'active-pro' ,component:'',children:[]},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
