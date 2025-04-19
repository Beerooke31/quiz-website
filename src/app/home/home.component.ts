import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCategoryComponent } from '../quiz-category/quiz-category.component';

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
      <app-quiz-category></app-quiz-category>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
