import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AssociationService } from 'app/services/associationService/association.service';
import { DonationService } from 'app/services/donationService/donation.service';
import { RequestService } from 'app/services/requestService/request.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';

import * as Chart from 'chart.js';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: any[];
  labels: any;
};


@Component({
  selector: 'app-donation-association',
  templateUrl: './donation-association.component.html',
  styleUrls: ['./donation-association.component.scss'],
})
export class DonationAssociationComponent implements OnInit {








  //stat
  hashMapUserRole: Map<String, number> = new Map<string, number>();
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chartT") chartT: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartType: Partial<ChartOptions>;
  //requests
  hashMapRequestStatus: Map<String, number> = new Map<string, number>();
  hashMapRequestType: Map<String, number> = new Map<string, number>();
  @ViewChild("chartRequestStatus") chartRequestStatus: ChartComponent;
  @ViewChild("chartRequestType") chartRequestType: ChartComponent;
  public chartRtStatus: Partial<ChartOptions>;
  public chartRtType: Partial<ChartOptions>;




  result!: any[]
  keys!: any[]
  values!: any[]

  hashMapDonationStatus: Map<String, number> = new Map<string, number>();

  donationStatistics: any;

  constructor(private associationService: AssociationService, private requestService: RequestService,
    private donationService: DonationService, private router: Router) {
    this.statisticsDonationStatus();
    this.statisticsDonationType();

    this.statisticsRequestsStatus();
    this.statisticsRequestsType();

  }
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////









  //////////////////////////////////////////////statDonations//////////////////////////////////////////////////////////////////

  private statisticsDonationStatus() {
    this.donationService.statisticsDonationStatus().subscribe(data => {
      console.log(data);

      this.keys = Object.keys(data);
      this.values = Object.values(data);
      console.log(this.keys);
      console.log(this.values[0]);
      this.chartOptions = {
        series: this.values,
        chart: {
          type: "donut"
        },
        labels: this.keys,
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
      console.log(this.hashMapUserRole);
    })
  }




  private statisticsDonationType() {
    this.donationService.statisticsDonationType().subscribe(data => {
      console.log(data);

      this.keys = Object.keys(data);
      this.values = Object.values(data);
      console.log(this.keys);
      console.log(this.values[0]);
      this.chartType = {
        series: this.values,
        chart: {
          type: "donut"
        },
        labels: this.keys,
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
      console.log(this.hashMapUserRole);
    })
  }
  //////////////////////////////////////////////statRequests//////////////////////////////////////////////////////////////////


  private statisticsRequestsStatus() {
    this.requestService.statisticsRequestsStatus().subscribe(data => {
      console.log(data);

      this.keys = Object.keys(data);
      this.values = Object.values(data);
      console.log(this.keys);
      console.log(this.values[0]);
      this.chartRtStatus = {
        series: this.values,
        chart: {
          type: "donut"
        },
        labels: this.keys,
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
      console.log(this.hashMapRequestStatus);
    })
  }


  private statisticsRequestsType() {
    this.requestService.statisticsRequestsType().subscribe(data => {
      console.log(data);

      this.keys = Object.keys(data);
      this.values = Object.values(data);
      console.log(this.keys);
      console.log(this.values[0]);
      this.chartRtType = {
        series: this.values,
        chart: {
          type: "donut"
        },
        labels: this.keys,
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
      console.log(this.hashMapUserRole);
    })
  }


























}
