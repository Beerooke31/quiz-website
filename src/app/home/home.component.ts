import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCategoryComponent } from '../quiz-category/quiz-category.component';
import { QuizCategory } from '../quizcategory';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, QuizCategoryComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by category" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-quiz-category
        *ngFor="let quizCategory of quizCategoryList"
        [quizCategory]="quizCategory"
      ></app-quiz-category>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://unsplash.com';

  quizCategoryList: QuizCategory[] = [];
  quizService: QuizService = inject(QuizService);

  constructor() {
    this.quizCategoryList = this.quizService.getAllQuizCategories();
  }
}
