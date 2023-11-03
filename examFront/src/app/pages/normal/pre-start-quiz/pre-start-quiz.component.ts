import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pre-start-quiz',
  templateUrl: './pre-start-quiz.component.html',
  styleUrls: ['./pre-start-quiz.component.scss']
})
export class PreStartQuizComponent implements OnInit{

  qId=0;
  quizData:any;
  constructor(private route:ActivatedRoute,
    private quizService: QuizService,
    private router:Router){}

  ngOnInit(): void {
      this.qId = this.route.snapshot.params['qId'];
      this.getQuizData();
  }

  getQuizData(){
    this.quizService.getSingleQuiz(this.qId).subscribe((data:any)=>{
      this.quizData=data;
    },
    (error)=>{
      Swal.fire("Error !! ","Error in Deleting data","error");
    })
  }
  startQuiz(){
    Swal.fire({
      icon:'info',
       title:'Are You sure, You want to start ?',
      confirmButtonText:'Start',
      showCancelButton:true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate(['/start-quiz/'+this.quizData.qId]);
      }
     })
       
  }
}
