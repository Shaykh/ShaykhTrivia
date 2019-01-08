import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { Category } from './../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  serviceURl = 'http://localhost:3000/questions';
  questions: Question[];
  questionSubject = new Subject<Question[]>();

  constructor(private http: HttpClient) {
    // this.getQuestions();
    this.setQuestions$();
  }

  emitQuestions() {
    this.questionSubject.next(this.questions);
  }

  getQuestions() {
    const url = this.serviceURl;
    this.http.get<Question[]>(url).subscribe(
      (response) => {
        this.questions = response;
        this.emitQuestions();
      },
      (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  setQuestions$() {
    const question$ = this.http.get<Question[]>('http://localhost:3000/questions');
    const categories$ = this.http.get<Category[]>('http://localhost:3000/categories');

    forkJoin([question$, categories$])
      .pipe(
        map(([questions, categories]) => {
          console.log(questions);
          console.log(categories);
          questions.forEach(q => {
            console.log(q);
            q.categories = [];
            q.categoryIds.forEach(id => {
              q.categories.push(categories.find(elt => elt.id === id));
            });
          });
          return questions;
        })
      )
      .subscribe(
        (questions) => {
          this.questions = questions;
          this.emitQuestions();
        },
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
  }
}
