import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { CategoryDetailsComponent } from './Views/Category/category-details/category-details.component';
import { UpdateCategoryComponent } from './/Views/Category/update-category/update-category.component';
import { CreateCategoryComponent } from './Views/Category/create-category/create-category.component';
import { CategoryListComponent } from './Views/Category/category-list/category-list.component';
import { ProductListComponent } from './Views/Product/product-list/product-list.component';
import { ReclamationListComponent } from './Views/Reclamation/reclamation-list/reclamation-list.component';
import { GiftListComponent } from './Views/Gift/gift-list/gift-list.component';


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
    UpdateCategoryComponent,
    CategoryDetailsComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    ProductListComponent,
    ReclamationListComponent,
    GiftListComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
