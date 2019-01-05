import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  serviceURl = 'http://localhost:3000/categories';
  categories: Category[];
  categorieSubject = new Subject<Category[]>();

  constructor(private http: HttpClient) { }

  emitCategories() {
    this.categorieSubject.next(this.categories.slice());
  }

  getCategories() {
    const url = this.serviceURl;
    this.http.get<Category[]>(url).subscribe(
      (response) => {
        this.categories = response;
        this.emitCategories();
      },
      (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
}
