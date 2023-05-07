import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "app/Models/article";

@Injectable({
    providedIn: 'root'
  })
  export class AddArticle {
   /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
   API_URL : string = 'http://localhost:8082/PharmaLife';
  
    constructor(private httpClient: HttpClient) { }
  


   
  
    addArticle(article: Article) {
      return this.httpClient.post(`${this.API_URL}`+"/add-article", article);
    }
  
   
   
  }