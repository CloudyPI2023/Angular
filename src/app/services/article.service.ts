import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "app/Models/article";

@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {
    readonly API_URL = 'http://localhost:8082';
  
    constructor(private httpClient: HttpClient) { }
  
    getAllArticles() {
      return this.httpClient.get(`${this.API_URL}/articles`);
    }
  
    getArticleById(idArticle: number) {
      return this.httpClient.get(`${this.API_URL}/articles/${idArticle}`);
    }
  
    addArticle(article: Article) {
      return this.httpClient.post(`${this.API_URL}/articles`, article);
    }
  
    updateArticle(article: Article) {
      return this.httpClient.put(`${this.API_URL}/articles/${article.idArticle}`, article);
    }
  
    deleteArticle(idArticle: number) {
      return this.httpClient.delete(`${this.API_URL}/articles/${idArticle}`);
    }
  }