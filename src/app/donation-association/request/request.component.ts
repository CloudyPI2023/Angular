import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DonationRequestType } from "app/enumeration/donation-request-type";
import { Association } from "app/models/association";
import { Donation } from "app/models/donation";
import { Request } from "app/models/request";
import { AssociationService } from "app/services/associationService/association.service";
import { DonationService } from "app/services/donationService/donation.service";
import { RequestService } from "app/services/requestService/request.service";
import { response } from "express";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  
  public editRequest?: Request;
  public deleteRequest?: Request;
  public detailsRequest?: Request;
  public assignRequest?: Request;
  requests: Request[];
  requestsInProgress: any;
  requestsAccepted: Request[];
  requestsRefused: Request[];
  r:DonationRequestType[];
  selectedTypeRequest: DonationRequestType;
  typeOption: any =[];

  associationList: Association[];
  donationList: Donation[];
  isDisabled:Boolean = true;
  associations: Association[];
  req:Request;

  constructor(private requestService: RequestService,private associationService: AssociationService,
    private donationService: DonationService,private router: Router) { }

  ngOnInit(): void {
    this.getRequests();
    this.getAssociations();
    this.getDonations();
  }

  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => {
      this.associationList = data;
    });
  }
  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
      this.donationList = data;
  
    });
  }

  getEnumValues(enumObj: any) {
    return Object.keys(enumObj).filter(key => !isNaN(Number(enumObj[key])));
  }

  private getRequestsInProgress(){
    this.requestService.getRequestInProgressList().subscribe(data => {
      this.requests = data; 
  
    });
  }
  private getRequestsAccepted(){
    this.requestService.getRequestAcceptedList().subscribe(data => {
      this.requests = data;
  
    });
  }
  private getRequestsRefused (){
    this.requestService.getRequestRefusedList().subscribe(data => {
      this.requests = data;
  
    });
  }
  private getRequests(){
    this.requestService.getRequestList().subscribe(data => {
      this.requests = data;
  
    });
  }
  
  public OnDetailsRequest(idRequest: number){
    this.requestService.getRequestById(idRequest).subscribe(
      (response: Request) => {
        console.log(response);
      });
  }

  
  public onAddRequest(addForm: NgForm): void {
    document.getElementById('add-Request-form')!.click();
    this.requestService.createRequest(addForm.value).subscribe(
      (response: Request) => {
        console.error
        console.log(response);
        this.getRequests();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onUpdateRequest(request: Request) {
    this.requestService.updateRequest(request).subscribe(
      (response: Request) => {
        console.log(response);
        this.getRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public assignRequestToDonation(request: Request) {
    this.requestService.assignRequestToDonation(request).subscribe(
      (response: Request) => {
        console.log(response);
        this.getRequests();
        //this.isDisabled = true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onDeleteRequest(idRequest: number): void {
    this.requestService.deleteRequest(idRequest).subscribe(() => { this.getRequests() }
    
    ),
    (error: HttpErrorResponse) => {
      alert(error.message);
    };
  }
  
  public onOpenModal(request: Request, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editRequest = request;
      button.setAttribute('data-target', '#updateRequestModal');
    }
    if (mode === 'delete') {
      this.deleteRequest = request;
      button.setAttribute('data-target', '#deleteRequestModal');
    }
    if (mode === 'add') {
      this.associationList;
      button.setAttribute('data-target', '#addRequestModal');
    }
    if (mode === 'detail') {
  
      button.setAttribute('data-target', '#detailRequestModal');
    }
    if (mode === 'assignRequestToDonation') {
      this.assignRequest= request;
      button.setAttribute('data-target', '#assignRequestToDonationModal');
    }
    container?.appendChild(button);
    button.click();
  }

  /*getColor(nomAssociation: string): string {
    // Exemple de fonction de hachage pour générer une couleur en fonction du nom de l'association
    const hashCode = Array.from(nomAssociation).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const color = `hsl(${hashCode % 360}, 50%, 70%)`;
    return color;
  }*/


}
