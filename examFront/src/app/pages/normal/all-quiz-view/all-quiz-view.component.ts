import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-quiz-view',
  templateUrl: './all-quiz-view.component.html',
  styleUrls: ['./all-quiz-view.component.scss']
})
export class AllQuizViewComponent implements OnInit{

  quizData:any;
  cid=0;
  constructor(private route:ActivatedRoute,
    private quizService:QuizService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.cid = params['cId'];
      if(this.cid == 0){
                this.quizService.getAllActiveQuiz().subscribe((data:any)=>{
                  this.quizData = data;
                },
                (error)=>{
                  console.log(error);
                  Swal.fire("Error !! ","Error in Loading data","error");
                })
         }else{
          this.quizService.getQuizByCategory(this.cid).subscribe((data:any)=>{
            this.quizData = data;
          },
          (error)=>{
            console.log(error);
                  Swal.fire("Error !! ","Error in Loading data","error");
          })
         }

    })
    //  this.cid =this.route.snapshot.params['cId'];

    //  if(this.cid == 0){
    //        console.log('load all quest' + this.cid);
    //         this.quizService.getAllQuiz().subscribe((data:any)=>{
    //           this.quizData = data;
    //           console.log("quezdata "+ JSON.stringify(this.quizData));
    //         },
    //         (error)=>{
    //           console.log(error);
    //           Swal.fire("Error !! ","Error in Loading data","error");
    //         })
    //  }else{
    //   this.quizData = [];
    //   console.log('load only' +this.cid );
    //   // this.quizService.getSingleQuiz(this.cid).subscribe((data:any)=>{
    //   //   this.quizData = data;
    //   // },
    //   // (error)=>{
    //   //   console.log(error);
    //   //         Swal.fire("Error !! ","Error in Loading data","error");
    //   // })
    //  }
  }

}
