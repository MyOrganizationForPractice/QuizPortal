import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit{

  public user={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    profile:''
   };

   userId=0;
  constructor(private route:ActivatedRoute,
    private loginService: LoginService,
    private userService:UserService,
    private router:Router){}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.user = this.loginService.getUser();
  }

  updateProfile(){
     this.userService.updateProfile(this.userId,this.user).subscribe((data:any)=>{
      this.user=data;
      this.loginService.setUser(this.user);
      Swal.fire('success',"User is Updated Successfully!!",'success').then((e)=>{
        this.router.navigate(['/admin-dashboard/profile']);
       });
      // // .then((e)=>{
      // //   this.router.navigate(['/admin-dashboard']);
      // });
     },
     (error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong in updating!!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
     })
  }

  // clear(){
  //   this.user = this.loginService.getUser();
  // }

}
