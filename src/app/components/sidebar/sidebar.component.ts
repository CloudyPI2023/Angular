import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/users', title: 'User management' ,icon:'person', class: '' },
  { path: '/deliveryPersons', title: 'Delivery management',  icon:'local_shipping', class: '' },
  { path: '/product-management', title: 'Product and gifts',  icon:'redeem', class: '' },
  { path: '/DonationAssociation', title: 'Donation and association',  icon:'volunteer_activism', class: '' },
  { path: '/EventReservation', title: 'Event and reservation',  icon:'bubble_chart', class: '' },
  { path: '/maps', title: 'Article and comment',  icon:'location_on', class: '' },
  { path: '/notifications', title: 'Pruchase and order',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Contact',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  routes: RouteInfo[];

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
