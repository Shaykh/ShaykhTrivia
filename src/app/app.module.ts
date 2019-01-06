import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
