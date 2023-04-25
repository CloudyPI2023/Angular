import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AssociationComponent } from './views/association/association.component';
import { DonationAssociationComponent } from './views/donation-association/donation-association.component';
import { DonationComponent } from './views/donation/donation.component';
import { RequestComponent } from './views/request/request.component';


import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {NgToastModule} from 'ng-angular-popup';
import { StatComponent } from './views/stat/stat.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
    NgToastModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AssociationComponent,
    DonationAssociationComponent,
    DonationComponent,
    RequestComponent,
    StatComponent,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
