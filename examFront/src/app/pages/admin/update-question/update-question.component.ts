import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent implements OnInit{
  public Editor = ClassicEditor;
  
  constructor(private route:ActivatedRoute,
    private questionService:QuestionService,
    private router: Router){}

  questionData={
    questionId:null,
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qid:''
    }
  }


  questionId=0;

  ngOnInit(): void {
    this.questionId=this.route.snapshot.params['questionId'];
    this.getQuestionData();
  }

  getQuestionData(){
         this.questionService.getSingleQuestionData(this.questionId).subscribe((data:any)=>{
          this.questionData = data;
          console.log('dataa' + JSON.stringify(this.questionData));
         },
         (error)=>{
          console.log(error);
          Swal.fire("Error !! ","Error in Deleting data","error");
         }
         )
  }

  updateQuestion(){
    this.questionService.updateQuestion(this.questionData).subscribe((data:any)=>{
      Swal.fire("success !! ","Question Updated Successfully !!","success").then((e)=>{
        this.router.navigate(['admin-dashboard/quiz']);
      });
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in Deleting data","error");
    })
  }
}
