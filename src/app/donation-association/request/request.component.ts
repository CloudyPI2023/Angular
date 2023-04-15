import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Association } from 'app/models/association';
import { RequestService } from 'app/services/requestService/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requests: Request[];
  association: Association[];

  constructor(private requestService: RequestService,
    private router:Router) { }

  ngOnInit(): void {
    this.getRequests();
  }

  private getRequests(){
    this.requestService.getRequestList().subscribe(data => {
      this.requests = data;
    });
  }

}
