import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService,
    private snack: MatSnackBar,
    private route: Router) { }

  public user = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profile: ''
  };

  ngOnInit(): void {

  }
  formSubmit() {
    if (this.user.userName == '' || this.user.userName == null) {
      //alert("All Fields need to be filled!!");
      //  this.snack.open("All Fields need to be filled!!","Ok");
      this.snack.open("All Fields need to be filled!!", "", {
        duration: 3000,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data) => {
        Swal.fire('success', "User is Successfully Registered!!", 'success');
        setTimeout(() => {
          this.route.navigate(['/']);
        }, 2000);
      },
      (error) => {
        console.log(error);
        //alert("Something Went Wrong");
        // this.snack.open("Something Went Wrong!!","",{
        //   duration:3000
        // });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    );
  }
}
