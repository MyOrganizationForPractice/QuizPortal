import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit{

  constructor(private route:ActivatedRoute,
    private questionService:QuestionService,
    private mat:MatSnackBar,
    private router:Router){}

  qId=0;

  public Editor = ClassicEditor;

  questionData={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qId:0,
    }
  };

  returnData:any;
  title:any;

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this.title = this.route.snapshot.params['title'];
    this.questionData.quiz['qId']=this.qId;
  }

  saveQuestion(){
    if(this.questionData.content==null || this.questionData.content.trim()=='' || this.questionData.option1.trim()=='' || this.questionData.option2.trim()=='' || this.questionData.answer.trim()==''){
      this.mat.open("All fields are required !! ",'',{
        duration:3000
      });
      return;
    }
    // if validation all okay
        this.questionData.quiz.qId=this.qId;  
        // this.questionData.quiz['qId']=this.qId;  //both way are same
         this.questionService.saveQuestionOfQuiz(this.questionData).subscribe((data:any)=>{
          this.returnData=data;
          this.questionData={
            content:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            answer:'',
            quiz:{
              qId:0,
            }
          };
          Swal.fire("Success !! ","Question Added Successfully",'success').then((e)=>
          this.router.navigate(['/admin-dashboard/quiz']));
         },
         (error)=>{
          console.log(error);
          Swal.fire("Error !! ","Error in saving Question","error");
         })
  }
}
