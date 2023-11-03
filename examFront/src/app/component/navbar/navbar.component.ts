import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(public loginService:LoginService,
    private router:Router){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public logout(){
    this.loginService.logOut();
     window.location.href='/'
  // this.router.navigate(['/']);
  }  

}
