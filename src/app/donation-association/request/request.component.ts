import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
//import { Request } from "app/models/request";
import { RequestService } from "app/services/requestService/request.service";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  
  public editRequest?: Request;
  public deleteRequest?: Request;
  public detailsRequest?: Request;
  requests: Request[];

  constructor(private requestService: RequestService,private router: Router) { }

  ngOnInit(): void {
    this.getRequests();
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
  
      button.setAttribute('data-target', '#addRequestModal');
    }
    if (mode === 'detail') {
  
      button.setAttribute('data-target', '#detailRequestModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
