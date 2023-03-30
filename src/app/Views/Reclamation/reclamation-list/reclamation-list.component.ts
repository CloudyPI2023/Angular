import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from '../../../Models/reclamation';
import { ReclamationService } from '../../../services/reclamation.service';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {

  reclamations: Reclamation[];

  constructor(private rs: ReclamationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReclamations();
  }

  private getReclamations(){
    this.rs.getAllReclamations().subscribe(data => {
      this.reclamations = data;
    });
  }

}
