import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = "http://localhost:8082/PharmaLife/Category";

  constructor(private httpClient: HttpClient) { }
  
  getAllCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`+"/all-categories");
  }
  getAllCategoriesArchived(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`+"/all-categoriesArchived");
  }
  getAllCategoriesCancelArchived(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`+"/all-categories");
  }

  createCategory(category: Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+"/add-category", category);
  }

  getCategoryById(idCategory: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}`+"/retrieve-category/"+`${idCategory}`);
  }

  updateCategory(category: Category): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+"/update-category/",category);
  }

  deleteCategory(idCategory: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+"/delete-category/"+`${idCategory}`);
  }
  setArchivedCategory(category:Category):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+"/archive-category/",category);

  }
  setArchivedCancelCategory(category:Category):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+"/cancel-archive-category/",category);

  }



}