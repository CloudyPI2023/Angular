import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AssociationComponent } from './donation-association/association/association.component';
import { DonationComponent } from './donation-association/donation/donation.component';
import { RequestComponent } from './donation-association/request/request.component';
import { DonationAssociationComponent } from './donation-association/donation-association.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AssociationComponent,
    DonationComponent,
    RequestComponent,
    DonationAssociationComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
