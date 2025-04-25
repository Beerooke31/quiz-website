import { Injectable } from '@angular/core';
import { QuizCategory } from './quizcategory';
import { QuizQuestions } from './quiz-questions';
import { QuizOptions } from './quiz-options';
import { QuizResults } from './quiz-results';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  listUrl = 'http://localhost:3000/quizzes';
  questionUrl = 'http://localhost:3000/quizQuestions';
  optionUrl = 'http://localhost:3000/quizOptions';
  resultUrl = 'http://localhost:3000/quizResults';

  async getAllQuizCategories(): Promise<QuizCategory[]> {
    const data = await fetch(this.listUrl);
    console.log(data);
    return (await data.json()) ?? [];
  }

  async getQuizCategoryById(id: number): Promise<QuizCategory | undefined> {
    const data = await fetch(`${this.listUrl}?id=${id}`);
    const quizJson = await data.json();
    return quizJson[0] ?? {};
  }

  async getQuizQuestionById(id: number): Promise<QuizQuestions | undefined> {
    const data = await fetch(`${this.questionUrl}?id=${id}`);
    const quizJson = await data.json();
    return quizJson[0] ?? {};
  }

  async getQuizOptionById(id: number): Promise<QuizOptions | undefined> {
    const data = await fetch(`${this.optionUrl}?id=${id}`);
    const quizJson = await data.json();
    return quizJson[0] ?? {};
  }

  async getQuizResultById(id: number): Promise<QuizResults | undefined> {
    const data = await fetch(`${this.resultUrl}?id=${id}`);
    const quizJson = await data.json();
    return quizJson[0] ?? {};
  }

  submitForm(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
