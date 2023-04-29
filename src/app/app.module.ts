import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserComponent } from './views/user-management/user.component'; 
import { DeliveryPersonComponent } from './views/deliveryP-management/delivery-person.component';
import { LoginComponent } from './views/login/login.component';
import {NgToastModule} from 'ng-angular-popup';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { JwtModule } from "@auth0/angular-jwt";
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SearchPipe } from './search.pipe';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgToastModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTooltipModule,
    MatSelectModule,
    NgChartsModule,
    NgChartsModule,
    NgApexchartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('token')
      }
    }) 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserComponent,
    DeliveryPersonComponent,
    LoginComponent,
    SearchPipe,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
