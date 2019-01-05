import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private serviceURl = 'http://localhost:3000/categories';

  constructor(private http: Http) { }

  getCategories() {


  }
}
