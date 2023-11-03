import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-normal-sidebar',
  templateUrl: './normal-sidebar.component.html',
  styleUrls: ['./normal-sidebar.component.scss']
})
export class NormalSidebarComponent implements OnInit{

  categoryList: any;

  constructor(private categoryService:CategoryService,
    private loginService:LoginService){}
    
  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
      this.categoryList = data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","Error in Deleting data","error");
    });
  }

  logout(){
    this.loginService.logOut();
    window.location.href='/'
  }

}

