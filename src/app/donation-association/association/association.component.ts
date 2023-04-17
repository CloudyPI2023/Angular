import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Association } from 'app/models/association';
import { AssociationService } from 'app/services/associationService/association.service';



@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  public editAssociation?: Association;
  public deleteAssociation?: Association;
  public detailsAssociation?: Association;
  associations: Association[];

  constructor(private associationService: AssociationService,private router: Router) { }

  ngOnInit(): void {
    this.getAssociations();
  }

  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => {
       this.associations = data;
  
    });
  }
  
  public OnDetailsAssociation(idAssociation: number){
    this.associationService.getAssociationById(idAssociation).subscribe(
      (response: Association) => {
        console.log(response);
      });
  }

  public RequestAssociation(idAssociation: number){
    this.associationService.getAssociationById(idAssociation).subscribe(
      (response: Association) => {
        console.log(response);
      });
  }
  
  public onAddAssociation(addForm: NgForm): void {
    document.getElementById('add-Association-form')!.click();
    this.associationService.createAssociation(addForm.value).subscribe(
      (response: Association) => {
        console.error
        console.log(response);
        this.getAssociations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onUpdateAssociation(association: Association) {
    this.associationService.updateAssociation(association).subscribe(
      (response: Association) => {
        console.log(response);
        this.getAssociations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onDeleteAssociation(idAssociation: number): void {
    this.associationService.deleteAssociation(idAssociation).subscribe(() => { this.getAssociations() }
    
    ),
    (error: HttpErrorResponse) => {
      alert(error.message);
    };
  }
  
  public onOpenModal(association: Association, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editAssociation = association;
      button.setAttribute('data-target', '#updateAssociationModal');
    }
    if (mode === 'delete') {
      this.deleteAssociation = association;
      button.setAttribute('data-target', '#deleteAssociationModal');
    }
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addAssociationModal');
    }
    if (mode === 'detail') {
  
      button.setAttribute('data-target', '#detailAssociationModal');
    }
    if (mode === 'request') {
  
      button.setAttribute('data-target', '#requestAssociationModal');
    }
    container?.appendChild(button);
    button.click();
  }


 
}
