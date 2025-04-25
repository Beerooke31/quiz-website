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
        <input type="text" placeholder="Filter by category" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-quiz-category
        *ngFor="let quizCategory of filteredQuizList"
        [quizCategory]="quizCategory"
      ></app-quiz-category>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  quizCategoryList: QuizCategory[] = [];
  quizService: QuizService = inject(QuizService);
  filteredQuizList: QuizCategory[] = [];

  constructor() {
    this.quizCategoryList = this.quizService.getAllQuizCategories();
    this.filteredQuizList = this.quizCategoryList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredQuizList = this.quizCategoryList;
      return;
    }
    this.filteredQuizList = this.quizCategoryList.filter((quizCategory) =>
      quizCategory?.type.toLowerCase().includes(text.toLowerCase())
    );
  }
}
