import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  serviceURl = 'http://localhost:3000/questions';
  questions: Question[];
  questionSubject = new Subject<Question[]>();

  constructor(private http: HttpClient) { }

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
}
