import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit{

  qid=0;
  quizData:any;
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

  constructor(private route:ActivatedRoute,
    private quizService: QuizService,
    private categoryService:CategoryService,
    private mat:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
    this.qid =this.route.snapshot.params['qId'];
    this.getSingleQuiz();
    this.getAllCategories();
  }

  getSingleQuiz(){
    this.quizService.getSingleQuiz(this.qid).subscribe((data:any)=>{
      this.quizData=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in Deleting data","error");
    }
    )
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

  updateData(){
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this.mat.open("Title Required !! ",'',{
        duration:3000
      });
      return;
    }
    this.quizService.updateQuiz(this.quizData).subscribe((data:any)=>{
      this.quizData={
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestion:'',
        active:false,
        category: ''
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
