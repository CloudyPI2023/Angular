import { Component, OnInit } from '@angular/core';
import { GiftService } from './gift.service';
import { Router } from '@angular/router';
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
  detailsGift?:Gift;
  ngOnInit(): void {
    this.getGifts();
  }
  getGifts(){
    this.gs.getAllGifts().subscribe(data => {
      this.gifts = data;
    });
  }

  public OnDetailsGift(idgift: number){
    this.gs.OnDetailsGift(idgift).subscribe(
      (response: Gift) => {
        console.log(response);
      });
  }  
  
  public onOpenModal(gift: Gift, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if(mode == 'details'){
      this.detailsGift = gift;
      button.setAttribute('data-target', '#giftDetailsModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
