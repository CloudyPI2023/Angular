import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { CategoryDetailsComponent } from './Modules/Category/category-details/category-details.component';
import { UpdateCategoryComponent } from './Modules/Category/update-category/update-category.component';
import { CreateCategoryComponent } from './Modules/Category/create-category/create-category.component';
import { CategoryListComponent } from './Modules/Category/category-list/category-list.component';
import { ProductListComponent } from './Modules/Product/product-list/product-list.component';
import { ReclamationListComponent } from './Modules/Reclamation/reclamation-list/reclamation-list.component';
import { GiftListComponent } from './Modules/Gift/gift-list/gift-list.component';


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
