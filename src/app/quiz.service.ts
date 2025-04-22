import { Injectable } from '@angular/core';
import { QuizCategory } from './quizcategory';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  protected quizCategoryList: QuizCategory[] = [
    {
      id: 0,
      title: 'Which Haruki Murakami book are you?',
      image: '/assets/books.jpg',
      date: '2025-01-15',
      type: 'Books',
    },
    {
      id: 1,
      title: 'What season best describes your personality?',
      image: '/assets/summer.jpg',
      date: '2025-02-20',
      type: 'Nature',
    },
    {
      id: 2,
      title: 'Which historical queen are you?',
      image: 'assets/crown.jpg',
      date: '2025-03-25',
      type: 'History',
    },
    {
      id: 3,
      title: 'Which pancake topping are you?',
      image: 'assets/pancakes.jpg',
      date: '2025-04-01',
      type: 'Food',
    },
    {
      id: 4,
      title: 'Are you a frontend or backend developer?',
      image: 'assets/laptop.jpg',
      date: '2025-02-06',
      type: 'Tech',
    },
    {
      id: 5,
      title: 'Which Coen Brothers film are you?',
      image: 'assets/cinema.jpg',
      date: '2025-03-30',
      type: 'Movies',
    },
  ];

  getAllQuizCategories(): QuizCategory[] {
    return this.quizCategoryList;
  }

  getQuizCategoryById(id: number): QuizCategory | undefined {
    return this.quizCategoryList.find((quizCategory) => quizCategory.id === id);
  }

  submitForm(firstName: string, lastName: string, email: string) {
    console.log(
      `Signup form submitted: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
