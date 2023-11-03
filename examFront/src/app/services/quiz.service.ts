import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getAllQuiz(){
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public saveQuiz(quizData:any){
   return this.http.post(`${baseUrl}/quiz/save`,quizData);
  }

  public deleteQuiz(qId:number){
   return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getSingleQuiz(qId:number){
  return this.http.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quizData:any){
    return this.http.put(`${baseUrl}/quiz/`,quizData);
  }

  public getQuizByCategory(qId:number){
      return this.http.get(`${baseUrl}/quiz/category/${qId}`);
  }

  public getAllActiveQuiz(){
      return  this.http.get(`${baseUrl}/quiz/activeQuiz`);
  }
}
