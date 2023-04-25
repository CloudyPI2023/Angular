import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Donation } from 'app/models/donation';
import { DonationService } from 'app/services/donationService/donation.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

 // chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];
  chartDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: true
    }
  };

  //chartLabels = ["InProgress", "Accepted", "Refused"];

  chartLabels = ["InProgress", "Accepted", "Refused"];
  chartTitle: ApexTitleSubtitle = {
    text: 'Products accourding to their categories',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
  
  hashMapDonationStatus:  Map<String, number> = new Map<string, number>();
  public editDonation?: Donation;
  public deleteDonation?: Donation;
  public detailsDonation?: Donation;
  donations: Donation[];

  constructor(private donationService: DonationService,private router: Router) { }

  ngOnInit(): void {
    this.getDonations();
    this.statisticsDonationStatus();
  }

  private statisticsDonationStatus(){
    this.donationService.statisticsDonationStatus().subscribe(data=>{
      this.hashMapDonationStatus=data;
      console.log("dataaaa"+data);
    
      console.log(this.hashMapDonationStatus);
    })
  }

  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
       this.donations = data;
  
    });
  }
  
  public OnDetailsDonation(idDonation: number){
    this.donationService.getDonationById(idDonation).subscribe(
      (response: Donation) => {
        console.log(response);
      });
  }

  
  public onAddDonation(addForm: NgForm): void {
    document.getElementById('add-Donation-form')!.click();
    this.donationService.createDonation(addForm.value).subscribe(
      (response: Donation) => {
        console.error
        console.log(response);
        this.getDonations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onUpdateDonation(donation: Donation) {
    this.donationService.updateDonation(donation).subscribe(
      (response: Donation) => {
        console.log(response);
        this.getDonations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onDeleteDonation(idDonation: number): void {
    this.donationService.deleteDonation(idDonation).subscribe(() => { this.getDonations() }
    
    ),
    (error: HttpErrorResponse) => {
      alert(error.message);
    };
  }
  
  public onOpenModal(donation: Donation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editDonation = donation;
      button.setAttribute('data-target', '#updateDonationModal');
    }
    if (mode === 'delete') {
      this.deleteDonation = donation;
      button.setAttribute('data-target', '#deleteDonationModal');
    }
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addDonationModal');
    }
    if (mode === 'detail') {
  
      button.setAttribute('data-target', '#detailDonationModal');
    }
  
    container?.appendChild(button);
    button.click();
  }

  //

}
