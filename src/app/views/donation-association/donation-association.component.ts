import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Association } from 'app/models/association';
import { Donation } from 'app/models/donation';
import { AssociationService } from 'app/services/associationService/association.service';
import { DonationService } from 'app/services/donationService/donation.service';
import { RequestService } from 'app/services/requestService/request.service';
import * as Chartist from 'chartist';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: any[];
  labels: any;
};
@Component({
  selector: 'app-donation-association',
  templateUrl: './donation-association.component.html',
  styleUrls: ['./donation-association.component.scss']
})
export class DonationAssociationComponent implements OnInit {
  
  associations: Association[];
  donations: Donation[];
  requests: Request[];

  totalAssociation: number;
  totalDonations: number;
  totalRequests: number;

   //stat
 hashMapUserRole:  Map<String, number> = new Map<string, number>();
 @ViewChild("chart") chart: ChartComponent;
 @ViewChild("chartT") chartT: ChartComponent;
 public chartOptions: Partial<ChartOptions>;
 public chartType: Partial<ChartOptions>;
 result!:any[]
 keys!:any[]
 values!:any[]

 hashMapDonationStatus:  Map<String, number> = new Map<string, number>();
  

  constructor(private associationService: AssociationService,private requestService: RequestService,
    private donationService: DonationService,private router: Router) { 
      this.statisticsDonationStatus();
      this.statisticsDonationType();
    }







    private statisticsDonationStatus(){
      this.donationService.statisticsDonationStatus().subscribe(data=>{
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
        console.log(this.hashMapUserRole);
      })
    }
  
  
    private statisticsDonationType(){
      this.donationService.statisticsDonationType().subscribe(data=>{
        console.log(data);
        
        this.keys = Object.keys(data);
        this.values = Object.values(data);
        console.log(this.keys);
        console.log(this.values[0]);
        this.chartType = {
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
        console.log(this.hashMapUserRole);
      })
    }








  

  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => {
       this.associations = data;
       this.totalAssociation = this.associations.length;
    });
  }

  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
       this.donations = data;
       this.totalDonations = this.donations.length;
    });
  }

  /*private getRequests(){
    this.requestService.getRequestList().subscribe(data => {
       //this.requests = data;
       this.totalRequests = this.requests.length;
    });
  }*/










  //////////////////////////////////////////////stat//////////////////////////////////////////////////////////////////

  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};
startAnimationForBarChart(chart){
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};

  ngOnInit(): void {


    this.getAssociations();
    this.getDonations();
   // this.getRequests();

    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
          [12, 17, 7, 17, 23, 18, 38]
      ]
  };

 const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  }

  var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  this.startAnimationForLineChart(dailySalesChart);


  /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

  const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
          [230, 750, 450, 300, 280, 240, 200, 190]
      ]
  };

 const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
  }

  var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

  // start animation for the Completed Tasks Chart - Line Chart
  this.startAnimationForLineChart(completedTasksChart);



  /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

  var datawebsiteViewsChart = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

    ]
  };
  var optionswebsiteViewsChart = {
      axisX: {
          showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
  };
  var responsiveOptions: any[] = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

  //start animation for the Emails Subscription Chart
  this.startAnimationForBarChart(websiteViewsChart);
  }

}
