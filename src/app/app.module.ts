import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductManagementComponent } from './views/product-management/product-management.component';
import { CategoryManagementComponent } from './views/category-management/category-management.component';
import { GiftManagementComponent } from './views/gift-management/gift-management.component';
import { ReclamationManagementComponent } from './views/reclamation-management/reclamation-management.component';
import { ArticleComponent } from './views/article/article.component';
import { AddArticleComponent } from './views/add-article/add-article.component';
import { StatComponent } from './views/article/stat/stat.component';


import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {NgToastModule} from 'ng-angular-popup';

import { BrowserModule } from '@angular/platform-browser';
import { CommentComponent } from './views/comment/comment.component';
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

 
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent,
    ReclamationManagementComponent,
    ArticleComponent,
    StatComponent,
    CommentComponent,
    SearchPipe
    /*AddArticleComponent,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
