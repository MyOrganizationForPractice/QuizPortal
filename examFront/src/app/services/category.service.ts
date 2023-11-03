import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${baseUrl}/category/`)
  }

  public saveCategory(category:any){
    return this.http.post(`${baseUrl}/category/save`,category);
  }

  public deleteCategory(cId:number){
    return this.http.delete(`${baseUrl}/category/delete/${cId}`);
  }

  public getSingleCategory(categoryId:number){
    return this.http.get(`${baseUrl}/category/${categoryId}`);
  }

  public updateCategory(data:any){
    return this.http.put(`${baseUrl}/category/`,data);
  }
}
