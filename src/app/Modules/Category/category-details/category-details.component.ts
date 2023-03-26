import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  id: number
  category: Category
  constructor(private route: ActivatedRoute, private cs: CategoryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.category = new Category();
    this.cs.getCategoryById(this.id).subscribe( data => {
      this.category = data;
    });
  }

}
