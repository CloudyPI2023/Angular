import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gift } from '../gift';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  gifts: Gift[];

  constructor(private gs: GiftService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGifts();
  }

  private getGifts(){
    this.gs.getAllGifts().subscribe(data => {
      this.gifts = data;
    });
  }
}
