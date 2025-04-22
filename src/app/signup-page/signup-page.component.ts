import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  imports: [CommonModule, ReactiveFormsModule],
  template: `<section class="create-account">
    <h2 class="section-heading">Sign Up For An Account</h2>
    <form [formGroup]="accountForm" (submit)="submitForm()">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" formControlName="firstName" />
      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" formControlName="lastName" />
      <label for="email">Email</label>
      <input id="email" type="email" formControlName="email" />
      <button type="submit" class="primary">Create Account</button>
    </form>
  </section>`,
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  quizService: QuizService = inject(QuizService);

  accountForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  submitForm() {
    this.quizService.submitForm(
      this.accountForm.value.firstName ?? '',
      this.accountForm.value.lastName ?? '',
      this.accountForm.value.email ?? ''
    );
  }
}
