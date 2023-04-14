import { Component, OnInit } from '@angular/core';
import { GiftService } from './gift.service';
import { Router } from 'express';
import { NgToastService } from 'ng-angular-popup';
import { Gift } from 'app/Models/gift';

@Component({
  selector: 'app-gift-management',
  templateUrl: './gift-management.component.html',
  styleUrls: ['./gift-management.component.css']
})
export class GiftManagementComponent implements OnInit {

  constructor(private gs:GiftService ,router:Router,private toast: NgToastService) { }
  gifts:Gift[];
  ngOnInit(): void {
  }
  getGifts(){
    this.gs.getAllGifts().subscribe(data => {
      this.gifts = data;
    });
  }
}
