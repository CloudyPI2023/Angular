import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCategoryComponent } from './Modules/Category/create-category/create-category.component';
import { CategoryDetailsComponent } from './Modules/Category/category-details/category-details.component';
import { CategoryListComponent } from './Modules/Category/category-list/category-list.component';
import { UpdateCategoryComponent } from './Modules/Category/update-category/update-category.component';

const routes: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'create-category', component: CreateCategoryComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'update-category/:idCategory', component: UpdateCategoryComponent},
  {path: 'category-details/:idCategory', component: CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule], declarations: [CreateCategoryComponent, CategoryDetailsComponent, CategoryListComponent, UpdateCategoryComponent]
})
export class AppRoutingModule { }