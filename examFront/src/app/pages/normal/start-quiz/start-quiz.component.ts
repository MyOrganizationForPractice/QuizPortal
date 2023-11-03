import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit{
    
  constructor(private route :ActivatedRoute,
    private location:LocationStrategy,
    private questionService:QuestionService,
    private loginService:LoginService){}

  quizId=0;

  questionData:any;
  marksGot=0;
  correctAnswer=0;
  attempted=0;
  isSubmit=false;
  timer:any;
  resultdata:any;

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['qId'];
    this.preventBackButton();
    this.getQuestionOfQuiz();
  }

  getQuestionOfQuiz(){
     this.questionService.getQuestionByQuiz(this.quizId).subscribe((data:any)=>{
          this.questionData=data;
          console.log(this.questionData)
          this.timer = this.questionData.length * 2 * 60;
          // this.questionData.forEach((q: { [x: string]: any; }) => {
          //   q['givenAnswer']='';
          // });
          this.startTimer();
     },
     (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in Deleting data","error");
     })
  }
  preventBackButton(){
    history.pushState(null, "", location.href);
   this.location.onPopState(()=>{
    history.pushState(null,'', location.href);
   })
  }

  submitQuiz(){
    Swal.fire({
      icon:'info',
       title:'Are You sure, You want to submit Quiz ?',
      confirmButtonText:'Yess',
      showCancelButton:true,
     }).then((e)=>{
          if(e.isConfirmed){
            this.isSubmit=true;
            this.questionService.evalQuiz(this.questionData).subscribe((data:any)=>{
              this.resultdata=data;
              this.marksGot = parseFloat(Number(this.resultdata.marksGot).toFixed(2));
              this.correctAnswer = this.resultdata.correctAnswer;
              this.attempted = this.resultdata.attempted;
              console.log('correct an '+ this.correctAnswer);
              console.log('marks got '+ this.marksGot);
              console.log('attempted ans '+ this.attempted);

            },
            (error)=>{
              console.log(error);
             // Swal.fire("Error !! ","Error in Deleting data","error");
            });
              //calculation
              // this.questionData.forEach((q: { givenAnswer: string; answer: string; })=>{
              //   if(q.givenAnswer == q.answer){
              //     this.correctAnswer++;
              //     let marksSingle=this.questionData[0].quiz.maxMarks/this.questionData.length;
              //     this.marksGot+=marksSingle;
              //   }
              //   if(q.givenAnswer.trim()!=''){
              //     this.attempted++;
              //   }
              // })
              // console.log('correct an '+ this.correctAnswer);
              // console.log('marks got '+ this.marksGot);
              // console.log('attempted ans '+ this.attempted);

          }
     })
  }

  startTimer(){
    let t= window.setInterval(()=>{
        if(this.timer <= 0){
          this.closeByTimer();
          clearInterval(t);
        }else{
          this.timer--;
        }
    },1000)
  }

  getFormateTime(){
    let minute = Math.floor(this.timer/60);
    let second= this.timer-minute*60;
    return `${minute} min : ${second} sec`;
  }

  closeByTimer(){
    this.isSubmit=true;
    //calculation
    this.questionData.forEach((q: { givenAnswer: string; answer: string; })=>{
      if(q.givenAnswer == q.answer){
        this.correctAnswer++;
        let marksSingle=this.questionData[0].quiz.maxMarks/this.questionData.length;
        this.marksGot+=marksSingle;
      }
      if(q.givenAnswer.trim()!=''){
        this.attempted++;
      }
    })    
  }

  printPage(){
    window.print();
  }
}
