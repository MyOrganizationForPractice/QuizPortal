import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  public getQuestionOfQuiz(qid:number){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public saveQuestionOfQuiz(questionData:any){
   return this.http.post(`${baseUrl}/question/save`,questionData);
  }

  public deleteQuestion(questionId:number){
     return this.http.delete(`${baseUrl}/question/${questionId}`);
  }

  getSingleQuestionData(id:number){
    return this.http.get(`${baseUrl}/question/${id}`);
  }

  updateQuestion(questionData:any){
    return this.http.put(`${baseUrl}/question/update`,questionData);
  }

  public getQuestionByQuiz(quizId:any){
    return this.http.get(`${baseUrl}/question/quiz/${quizId}`);
  }

  public evalQuiz(question:any){
    return this.http.post(`${baseUrl}/question/eval-quiz`,question);

  }
}
