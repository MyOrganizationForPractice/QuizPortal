import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginData={
    username:'',
      password:''
  }
  constructor(private userService:UserService,
  private loginService:LoginService,
  private router: Router){}
  ngOnInit(): void {
    
  }
  login(){
     if(this.loginData.username=='' || this.loginData.username==null){
     Swal.fire('error',"UserName is Required!!",'error');
     return;
  }else if(this.loginData.password=='' || this.loginData.password==null){
     Swal.fire('error',"password is Required!!",'error');
     return;
  }
   else{
      this.loginService.login(this.loginData).subscribe((data:any)=>{
        console.log("success");
        console.log(JSON.stringify(data.jwtToken));
         //login
         this.loginService.loginUser(data.jwtToken);
         this.loginService.getCurrentUser().subscribe((user:any)=>{
          this.loginService.setUser(user);
          //redirect
          let role= this.loginService.getUserRole();
          if(role=='Admin'){
           // window.location.href='/admin-dashboard' 
           this.router.navigate(['admin-dashboard'])
          }else if(role=='Normal'){
           // window.location.href='/normal-dashboard'
            this.router.navigate(['normal-dashboard/0'])
          }else{
            this.loginService.logOut();
          }
         })
      },
      (error)=>{
              console.log(error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Details!! Try Again...!',
              })
            }

      );
        
        
//       (data:any)=>{
//         console.log("riya print "+ JSON.stringify(data));   
//         localStorage.setItem("user",JSON.stringify(data));
//       var role = this.loginService.getUserRole();
//       if(role=='Admin')  {
//         window.location.href='/admin-dashboard'
//         console.log("riya print "+ JSON.stringify(role));
//       } else if(role=='Normal'){
//         window.location.href='/normal-dashboard'
//         console.log("riya print "+ JSON.stringify(role));
//       }
//     },
//  (error)=>{
//   console.log("riya print "+ JSON.stringify(data));
//       console.log(error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Invalid Details!! Try Again...!',
//       })
//     }
 //     );
    }
  }
}
