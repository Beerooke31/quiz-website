import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuizCategory } from '../quizcategory';
import { QuizQuestions } from '../quiz-questions';
import { QuizOptions } from '../quiz-options';
import { QuizResults } from '../quiz-results';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
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
      <section class="quiz">
        <h2 class="quiz-question">{{ quizQuestions?.questionOne }}</h2>
        <div class="options">
          <p class="option1">{{ quizOptions?.optionOne }}</p>
          <p class="option2">{{ quizOptions?.optionTwo }}</p>
          <p class="option3">{{ quizOptions?.optionThree }}</p>
          <p class="option4">{{ quizOptions?.optionFour }}</p>
        </div>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  quizService = inject(QuizService);
  quizCategory: QuizCategory | undefined;
  quizOptions: QuizOptions | undefined;
  quizQuestions: QuizQuestions | undefined;

  constructor() {
    const quizCategoryId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService
      .getQuizCategoryById(quizCategoryId)
      .then((quizCategory) => {
        this.quizCategory = quizCategory;
      });

    const quizQuestionId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService
      .getQuizQuestionById(quizQuestionId)
      .then((quizQuestions) => {
        this.quizQuestions = quizQuestions;
      });

    const quizOptionId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService.getQuizOptionById(quizOptionId).then((quizOptions) => {
      this.quizOptions = quizOptions;
    });
  }
}
