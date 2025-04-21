import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCategory } from '../quizcategory';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-category',
  imports: [CommonModule, RouterModule],
  template: ` <section class="quiz">
    <img
      class="quiz-picture"
      [src]="quizCategory.image"
      alt="Image of type of {{ quizCategory.type }}"
      crossorigin
    />
    <h2 class="quiz-heading">{{ quizCategory.title }}</h2>
    <p class="quiz-type">{{ quizCategory.type }}</p>
    <a [routerLink]="['/details', quizCategory.id]">Learn More</a>
  </section>`,
  styleUrls: ['./quiz-category.component.css'],
})
export class QuizCategoryComponent {
  @Input() quizCategory!: QuizCategory;
}
