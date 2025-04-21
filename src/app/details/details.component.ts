import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuizCategory } from '../quizcategory';

@Component({
  selector: 'app-details',
  imports: [],
  template: `<p>details works! {{ quizCategoryId }}</p>`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  quizCategoryId = -1;
  constructor() {
    this.quizCategoryId = Number(this.route.snapshot.params['id']);
  }
}
