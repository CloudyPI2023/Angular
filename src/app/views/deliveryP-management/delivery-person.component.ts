import { Component, OnInit } from '@angular/core';
import { DeliveryPerson } from 'app/models/delivery-person'; 
import { DeliveryPersonService } from './delivery-person.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-person',
  templateUrl: './delivery-person.component.html',
  styleUrls: ['./delivery-person.component.scss']
})
export class DeliveryPersonComponent implements OnInit {


  deliveryPersons: DeliveryPerson[];


  constructor(private deliveryPersonService: DeliveryPersonService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDeliveryPerson();
  }

  private getDeliveryPerson(){
    this.deliveryPersonService.getDeliveryPersonsList().subscribe(data => {
      this.deliveryPersons = data;
    });
  }


}
