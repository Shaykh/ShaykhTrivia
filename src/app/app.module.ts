import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { TagService } from './services/tag.service';

import { AppComponent } from './components/app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
