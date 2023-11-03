import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user:any;
  userName = '';
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.user = this.loginService.getUser();
     this.assignValue();
  }

  assignValue(){
    this.userName = this.user.userName;
  }

  Reset(){
       
  }
}
