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
import { ReservationComponent } from './views/reservation/reservation.component';
import { EventComponent } from './views/event/event.component';
import { EventReservationComponent } from './views/event-reservation/event-reservation.component';
import { SearchPipe } from './search.pipe';


import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    FullCalendarModule,
    AppRoutingModule,
    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AssociationComponent,
    DonationAssociationComponent,
    DonationComponent,
    RequestComponent,
    ReservationComponent,
    EventComponent,
    EventReservationComponent,
    SearchPipe,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
