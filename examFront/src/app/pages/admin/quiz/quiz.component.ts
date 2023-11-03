import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
 
//  qId: number;

  quizzes=[
    {
      qId:23,
      title:'basic java quiz',
      description:'Java SE is a computer platform that may be used to create desktop or Windows-based applications. Thus, core Java is a portion of Java SE in which developers create desktop-based programs utilizing Java’s',
      maxMarks:'13',
      numberOfQuestion:'20',
      active:'',
      category:{
        title:'programming'
      }
      
    },
    {
      qId:24,
      title:'basic java quiz',
      description:'Java SE is a computer platform that may be used to create desktop or Windows-based applications. Thus, core Java is a portion of Java SE in which developers create desktop-based programs utilizing Java’s',
      maxMarks:'13',
      numberOfQuestion:'20',
      active:'',
      category:{
        title:'programming'
      }
    }
  ];
  constructor(private quizService:QuizService){}

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe((data:any)=>{
      this.quizzes = data; 
     // Swal.fire("success !! ","Loaded Successfully","success");   
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in loading data","error");
    })
  }

  deleteQuiz(qId:number){
   Swal.fire({
    icon:'info',
     title:'Are You sure, You wanna Delete ?',
    confirmButtonText:'Delete',
    showCancelButton:true,
   }).then((result)=>{
    if(result.isConfirmed){
      //delete
      this.quizService.deleteQuiz(qId).subscribe((data:any)=>{
        this.quizzes= this.quizzes.filter((quiz)=>quiz.qId!=qId);
        Swal.fire("success !! ","Quiz Deleted Successfully !!","success");
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !! ","Error in Deleting data","error");
      })
    }
   })
  }

}
