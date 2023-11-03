import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(public loginService:LoginService){}

  ngOnInit(): void {
    
  }

  logout(){
    this.loginService.logOut();
    window.location.href='/'
  }
}
