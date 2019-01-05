import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[];
  categorySubscription: Subscription;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categorySubscription = this.categoryService.categorieSubject
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
    this.categoryService.emitCategories();
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }
}
