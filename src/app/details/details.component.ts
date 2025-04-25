import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuizCategory } from '../quizcategory';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <!-- <p>details works! {{ quizCategoryId }}</p> -->
    <article>
      <img
        class="quiz-image"
        [src]="quizCategory?.image"
        alt="Image of {{ quizCategory?.title }}"
        crossorigin
      />
      <section class="quiz-description">
        <h2 class="quiz-heading">{{ quizCategory?.title }}</h2>
        <p class="quiz-category">Quiz Topic: {{ quizCategory?.type }}</p>
      </section>
      <section class="quiz-features">
        <h2 class="section-heading">About this quiz</h2>
        <ul>
          <li>Date created: {{ quizCategory?.date }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  quizService = inject(QuizService);
  quizCategory: QuizCategory | undefined;

  constructor() {
    const quizCategoryId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService
      .getQuizCategoryById(quizCategoryId)
      .then((quizCategory) => {
        this.quizCategory = quizCategory;
      });
  }
}
