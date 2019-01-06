import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  serviceURl = 'http://localhost:3000/tagList';
  tags: any[];
  tagSubject = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  emitTags() {
    this.tagSubject.next(this.tags);
  }

  getTags() {
    const url = this.serviceURl;
    this.http.get<any[]>(url).subscribe(
      (response) => {
        this.tags = response;
        this.emitTags();
      },
      (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
}
