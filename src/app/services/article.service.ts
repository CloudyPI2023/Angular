import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "app/Models/article";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {
   /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
   API_URL : string = 'http://localhost:8082/PharmaLife';
  
    constructor(private httpClient: HttpClient) { }

    /* getArticles() {
      return this.httpClient.get(`${this.API_URL}/all-articles`);
    } */

    getArticleList(): Observable<Article[]>{
      return this.httpClient.get<Article[]>(`${this.API_URL}`+"/all-articles");
    }
  
  /*  getArticleById(idArticle: number) {
      return this.httpClient.get(`${this.API_URL}`+"/articles/${idArticle}");
    } */
  
    createArticle(article: Article) : Observable<any>{
      return this.httpClient.post(`${this.API_URL}`+"/add-article", article);
    }
  
    getArticleById(idArticle: number): Observable<Article>{
      return this.httpClient.get<Article>(`${this.API_URL}/retrieveArticle/${idArticle}`);
    }

    
    /* updateArticle(article: Article) : Observable<Article>{
      return this.httpClient.put(`${this.API_URL}`+"/edit-article/${article.idArticle}", article);
    } */

    updateArticle1(idArticle:number, article: Article):Observable<Object>{
      return this.httpClient.put(`${this.API_URL}/edit-article/${idArticle}`, article);
    } 
  
    public updateArticle(article: Article): Observable<Article> {
      return this.httpClient.put<Article>(`${this.API_URL+"/edit-article"}`, article);
    }
    
   
  
   deleteArticle(idArticle: any): Observable<Object> {
      return this.httpClient.delete(`${this.API_URL}/delete-article/${idArticle}`);
    }

    
   /* statisticsDonationStatus(): Observable<Map<String,number>>{
      return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsDonationStatus/");
    }*/
    statisticsArticlesByName(): Observable<Map<String,number>>{
      return this.httpClient.get<Map<String,number>>(`${this.API_URL}`+"/statisticsArticleByUser/");
    } 
  
    getArticlesByName(nameArticle: string): Observable<Article[]> {
     // return this.httpClient.get<Article[]>(${this.API_URL}/name/${nameArticle});
      return this.httpClient.get<Article[]>(`${this.API_URL}/name/${nameArticle}`);


  }
   

  }