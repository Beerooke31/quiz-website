import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuizCategory } from '../quizcategory';
import { QuizCards } from '../quiz-cards';

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
        <ul>
          <li *ngFor="let option of quizCards.options">
            <label>
              <input
                type="radio"
                name="question{{ quizCards.id }}"
                [value]="option"
              />
              {{ option }}
            </label>
          </li>
        </ul>
      </section>
      <ng-template #loading>
        <p>Loading quiz options...</p>
      </ng-template>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  quizService = inject(QuizService);
  quizCategory: QuizCategory | undefined;
  quizCards: QuizCards | undefined;

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

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe((data) => {
      this.quizCards = data.quizCards;
    });
  }
}
