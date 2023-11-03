import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit{

  categories=[
    {
      cid:'23',
      title:'programming'
    },
    {
      cid:'24',
      title:'programming'
    }
  ];

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:'',
    category: null
  };

  constructor(private categoryService:CategoryService,
    private quizService:QuizService,
    private mat:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
     this.getAllCategories();
  }
  
  getAllCategories(){
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      Swal.fire("Error !! ","Error in saving data","error");
    }
    )
  }

  saveQuiz(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this.mat.open("Title Required !! ",'',{
        duration:3000
      });
      return;
    }
    this.quizService.saveQuiz(this.quizData).subscribe((data:any)=>{
      this.quizData={
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestion:'',
        active:'',
        category: null
      };
     Swal.fire("Success !! ","Quiz Added Successfully",'success').then((e)=>{
      this.router.navigate(['/admin-dashboard/quiz']);
     });
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in saving data","error");
    }
    )
  }

}
