import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleServiceService {

  constructor() { }
  errorHandle(err:HttpErrorResponse){
    let message = '';
    message = 'handled globally';
    return throwError(message);
  }
}
