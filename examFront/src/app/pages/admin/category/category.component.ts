import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  categories=[
    {
     cid:1,
     title:"programming",
     description:"this is java"
    },
    {
      cid:1,
      title:"programming1",
      description:"this is java"
     },
     {
      cid:1,
      title:"programming2",
      description:"this is java"
     }
  ]
  constructor(private categoryService:CategoryService){

  }
  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories = data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in loading data","error");
    })
  }
  // deleteCategory(cid:number){
    
  //    this.categoryService.deleteCategory(cid).subscribe((data:any)=>{
  //     this.categories = this.categories.filter((quiz)=>quiz.cid!=cid);
  //     Swal.fire("success !! ","Quiz Deleted Successfully !!","success");
  //    },
  //    (error)=>{
  //     console.log(error);
  //     Swal.fire("Error !! ","Error in Deleting Quiz","error");
  //   }
  //    )
  // }

  deleteCategory(cid:number){

    Swal.fire({
      icon:'info',
       title:'Are You sure, You wanna Delete ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
     }).then((result)=>{
      if(result.isConfirmed){
        //delete category
        this.categoryService.deleteCategory(cid).subscribe((data:any)=>{
              this.categories = this.categories.filter((quiz)=>quiz.cid!=cid);
              Swal.fire("success !! ","Category Deleted Successfully !!","success");
             },
             (error)=>{
              console.log(error);
              Swal.fire("Error !! ","Error in Deleting Category","error");
            }
         )
      }
     })
    
  }

}
