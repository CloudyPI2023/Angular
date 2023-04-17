import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'app/Models/article';
import { ArticleService } from 'app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'] 
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];
  showForm = false;
  article: Article = new Article();
  closeResult: string | undefined;

  constructor(private articleService: ArticleService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.articleService.getAllArticles().subscribe(articles => this.articles = articles as Article[]);
  }
  

  addArticle(event: Article): void {
    this.articleService.addArticle(article).subscribe(() => {
      this.getAllArticles();
      this.showForm = false;
    });
  }

  editArticle(article: Article): void {
    this.articleService.updateArticle(article).subscribe();
  }

  deleteArticle(idArticle: number): void {
    this.articleService.deleteArticle(idArticle).subscribe(() => {
      this.getAllArticles();
    });
  }

  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = Closed with: ${result};
    }, (reason) => {
      this.closeResult = Dismissed ${this.getDismissReason(reason)};
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return with: ${reason};
    }
  }

  closeForm(): void {
    this.showForm = false;
  }

  cancel(): void {
    this.showForm = false;
  }
}