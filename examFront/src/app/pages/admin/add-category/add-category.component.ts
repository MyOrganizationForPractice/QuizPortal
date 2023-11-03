import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{

  category={
    title:'',
    description:''
  }
  constructor(private categoryService:CategoryService,
    private mat:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
    
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
        this.mat.open("Title Required !! ",'',{
          duration:3000
        });
      return;
    }
    //all done
    this.categoryService.saveCategory(this.category).subscribe((data:any)=>{
      this.category.title='';
      this.category.description='';
      Swal.fire("Success !! ","Category Added Successfully",'success').then((e)=>{
        this.router.navigate(['/admin-dashboard/categories']);
      });
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in saving data","error");
    }
    )
  }
}
