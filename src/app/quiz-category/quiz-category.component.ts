import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCategory } from '../quizcategory';
@Component({
  selector: 'app-quiz-category',
  imports: [CommonModule],
  template: ` <section class="quiz">
    <img
      class="quiz-picture"
      [src]="quizCategory.image"
      alt="Image of type of {{ quizCategory.type }}"
      crossorigin
    />
    <h2 class="quiz-heading">{{ quizCategory.title }}</h2>
    <p class="quiz-type">{{ quizCategory.type }}</p>
  </section>`,
  styleUrls: ['./quiz-category.component.css'],
})
export class QuizCategoryComponent {
  @Input() quizCategory!: QuizCategory;
}
