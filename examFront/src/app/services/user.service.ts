import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,
  ) { }

  public addUser(user:any){
   return this.http.post(`${baseUrl}/user/saveUser`,user);
  }

  public updateProfile(userId:number,userData:any){
    return this.http.put(`${baseUrl}/user/update/${userId}`,userData);
  }

public verifyUserByUsername(userName:any){
      return this.http.get(`${baseUrl}/user/user/${userName}`);
}

public changePassWord(userName:any, oldPass:any,newPass:any){
  return this.http.patch(`${baseUrl}/user/updatePassword/${userName}/${oldPass}/${newPass}`,null);
}

}
