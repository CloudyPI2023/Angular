import { Component, OnInit } from '@angular/core';
import { Gift } from 'app/Models/gift';
import { GiftService } from 'app/services/gift.service';
import { Router } from 'express';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.css']
})
export class ReclamationManagementComponent implements OnInit {

  constructor(private gs:GiftService,router:Router,toast:NgToastService) { }
  gifts:Gift[];

  
  ngOnInit(): void {
    this.getGifts();
  }
  getGifts(){
    this.gs.getAllGifts().subscribe(data => {
      this.gifts = data;
    });
  }

}
