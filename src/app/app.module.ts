import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './app.route';
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { TagService } from './services/tag.service';

import { AppComponent } from './components/app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TagsComponent } from './components/tags/tags.component';
import { ShaykhNavbarComponent } from './shaykh-navbar/shaykh-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent,
    ShaykhNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
