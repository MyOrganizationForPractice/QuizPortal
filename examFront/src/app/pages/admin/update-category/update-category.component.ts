import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit{

  constructor(private route:ActivatedRoute,
    private categoryService: CategoryService,
    private mat:MatSnackBar,
    private router:Router){}

  CategoryId:any;

  category={
    title:'',
    description:''
  }

  ngOnInit(): void {
     this.CategoryId = this.route.snapshot.params['cid'];
     console.log('riya id '+this.CategoryId);
     this.getCategoryDetail();
  }
  public getCategoryDetail(){
    this.categoryService.getSingleCategory(this.CategoryId).subscribe((data:any)=>{
       this.category=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in Deleting Category","error");
    })
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.mat.open("Title Required !! ",'',{
        duration:3000
      });
    return;
  }
  //all done
  this.categoryService.updateCategory(this.category).subscribe((data:any)=>{
    this.router.navigate(['/admin-dashboard/categories']);
  },
  (error)=>{
    console.log(error);
    Swal.fire("Error !! ","Error in Deleting Category","error");
  })


  }

}
