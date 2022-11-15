import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface QuizFromWeb {
  name: string;
  questions: {
    name: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private angularHttpSvc: HttpClient
  ) { }

  loadQuizzes = () => {

    const quizzesFromWeb = this.angularHttpSvc.get<QuizFromWeb[]>(
      "https://modern-js.azurewebsites.net/api/HttpTriggerJS1?code=8XD3vN3ehHLdZacBQJQhgUnNst9202gdd5VM3kWCytDkz2nXhia6kA==&name=Mystery%20Quiz"
    );

    return quizzesFromWeb;
  };
}
