import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizCategory } from './quizcategory';
import { QuizCards } from './quiz-cards';
import { QuizResults } from './quiz-results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  listUrl = 'http://localhost:3000/quizzes';
  questionUrl = 'http://localhost:3000/quizQuestions';
  cardUrl = 'http://localhost:3000/quizCards';
  resultUrl = 'http://localhost:3000/quizResults';

  constructor(private http: HttpClient) {}

  getQuizData(): Observable<any> {
    return this.http.get('db.json');
  }

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

  async getQuizCardById(id: number): Promise<QuizCards | undefined> {
    const response = await fetch(this.cardUrl);
    const data = await response.json();
    return data.quizCards ?? [];
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
