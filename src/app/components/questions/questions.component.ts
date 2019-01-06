import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionService } from './../../services/question.service';
import { Question } from './../../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  questions: Question[];
  questionSubscription: Subscription;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionSubscription = this.questionService.questionSubject
      .subscribe(
        (questions: Question[]) => {
          this.questions = questions;
        }
      );
      this.questionService.emitQuestions();
  }

  ngOnDestroy() {
    this.questionSubscription.unsubscribe();
  }
}
