import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'app/Models/article';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url=environment.apiBaseUrl+"articles";
  constructor(private httpClient: HttpClient) { }


  getArticleList(): Observable<Article[]>{
   return this.httpClient.get<Article[]>(this.url + '/retrieveAllArticles');  
  }

  createArticle(article: Article): Observable<any>{
    return this.httpClient.post(this.url + '/addArticle', article);
  }

  getArticleById(idArticle: number): Observable<Article>{
    return this.httpClient.get<Article>(`${this.url}/retrieveArticle/${idArticle}`);
  }

  updateArticle(idArticle:number, article: Article):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateDonation/${idArticle}`, article);
  } 

  deleteArticle(idArticle: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteArticle/${idArticle}`);
  }

  
}
