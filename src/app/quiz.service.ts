import { Injectable } from '@angular/core';
import { QuizCategory } from './quizcategory';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url = 'http://localhost:3000/quizzes';

  async getAllQuizCategories(): Promise<QuizCategory[]> {
    const data = await fetch(this.url);
    console.log(data);
    return (await data.json()) ?? [];
  }

  async getQuizCategoryById(id: number): Promise<QuizCategory | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const quizJson = await data.json();
    return quizJson[0] ?? {};
  }

  submitForm(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
