import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Association } from 'app/models/association';
import { AssociationService } from 'app/services/associationService/association.service';



@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  associations: Association[];
  constructor(private associationService: AssociationService,
    private router:Router) { }

  ngOnInit(): void {
 
  }
 
}
