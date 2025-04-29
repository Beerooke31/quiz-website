import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuizCategory } from '../quizcategory';
import { QuizCards } from '../quiz-cards';
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
        <p class="quiz-category">Quiz Category: {{ quizCategory?.type }}</p>
      </section>
      <section class="quiz" *ngIf="quizCards">
        <h2 class="quiz-question">{{ quizCards.question }}</h2>
        <div class="Cards">
          <button (click)="selectAnswer(quizCards.id, quizCards.options[0])">
            {{ quizCards.options[0] }}
          </button>
          <button (click)="selectAnswer(quizCards.id, quizCards.options[1])">
            {{ quizCards.options[1] }}
          </button>
          <button (click)="selectAnswer(quizCards.id, quizCards.options[2])">
            {{ quizCards.options[2] }}
          </button>
          <button (click)="selectAnswer(quizCards.id, quizCards.options[3])">
            {{ quizCards.options[3] }}
          </button>
        </div>
      </section>
      <ng-template #loading>
        <p>Loading quiz options...</p>
      </ng-template>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  quizService = inject(QuizService);
  quizCategory: QuizCategory | undefined;
  quizCards: QuizCards | undefined;
  selectedAnswers: { [cardId: number]: string } = {};

  constructor() {
    const quizCategoryId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService
      .getQuizCategoryById(quizCategoryId)
      .then((quizCategory) => {
        this.quizCategory = quizCategory;
      });

    const cardId = parseInt(this.route.snapshot.params['id'], 10);
    this.quizService.getQuizCardById(cardId).then((quizCard) => {
      this.quizCards = quizCard;
    });
  }

  selectAnswer(cardId: number, answer: string) {
    this.selectedAnswers[cardId] = answer;
    console.log(`Selected for card ${cardId}: ${answer}`);
  }
}
