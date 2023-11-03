import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.scss']
})
export class ViewQuizQuestionComponent implements OnInit{

  constructor(private route: ActivatedRoute,
    private questionService:QuestionService){}
   qid=0;
   q_title='';
   question=[
    {
      questionId:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
    }
   ];

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qId'];
    this.q_title = this.route.snapshot.params['title'];
    this.getQuestionOfQuiz();
  }

  getQuestionOfQuiz(){
    this.questionService.getQuestionOfQuiz(this.qid).subscribe((data:any)=>{
       this.question=data;
      // Swal.fire("success !! ","Quiz Deleted Successfully !!","success");
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Something Went Wrong:(","error");
    })
  }

  deleteQuestion(id:any){
    Swal.fire({
      icon:'info',
       title:'Are You sure, You wanna Delete ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
     }).then((result)=>{
      if(result.isConfirmed){
        //delete
        this.questionService.deleteQuestion(id).subscribe((data:any)=>{
          // this.quizzes= this.quizzes.filter((quiz)=>quiz.qId!=qId);
          this.question = this.question.filter((question)=>question.questionId!=id);
          Swal.fire("success !! ","Question Deleted Successfully !!","success");
        },
        (error)=>{
          console.log(error);
          Swal.fire("Error !! ","Something Went Wrong!!","error");
        })
      }
     })
  }
}
