import { Component, OnInit } from '@angular/core';
import { Donation } from 'app/models/donation';
import { DonationService } from 'app/services/donationService/donation.service';
import { Router } from 'express';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  donations: Donation[]; 

  constructor(private donationService: DonationService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDonations(); 
  }

  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
      this.donations = data;
    });
  }

}
