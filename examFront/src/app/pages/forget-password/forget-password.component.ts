import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{

  passObject={
    oldOne:'',
    newOne:'',
    reNewOne:''
  }
  user:any;
  userName:any;

  flag=false;
 
  constructor(private loginService:LoginService,
    private userService : UserService,
    private mat:MatSnackBar,
    private route: Router){}

  ngOnInit(): void {
   
  }

  changePassWord(){
      if(this.passObject.oldOne.trim()=='' || this.passObject.oldOne==null || this.passObject.newOne.trim()=='' || this.passObject.newOne==null){
        this.mat.open("Fields are Required to be fill :( ",'',{
          duration:3000
        });
      return;
    }
    if(this.passObject.newOne === this.passObject.reNewOne){
      this.userService.changePassWord(this.user.userName,this.passObject.oldOne,this.passObject.newOne).subscribe((data)=>{
        Swal.fire("Success !! ","Password has changed Successfully :)",'success').then((e)=>{
          this.route.navigate(['/login']);
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !! ","Old Password is not correct :(","error");
      }
      )  
    }else{
      this.mat.open("There is mismatch in new password :( ",'',{
        duration:3000
      });
      return;
    }
    // this.userService.changePassWord(this.user.userName,this.passObject.oldOne,this.passObject.newOne).subscribe((data)=>{
    //   Swal.fire("Success !! ","Password has changed Successfully :)",'success');
    // },
    // (error)=>{
    //   console.log(error);
    //   Swal.fire("Error !! ","Error in updating password :(","error");
    // }
    // )

  }

  verifyUsername(){
    if(this.userName.trim()=='' || this.userName==null){
      this.mat.open("Title Required !! ",'',{
        duration:3000
      });
    return;
  }
    this.userService.verifyUserByUsername(this.userName).subscribe((data:any)=>{
      this.user=data;
      Swal.fire("Success !! ","User is Validated :)",'success');
      this.flag=true;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !! ","User Is Invalid !!","error");
    }
    )
  }
}
