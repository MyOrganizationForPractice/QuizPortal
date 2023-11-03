import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

const TOKEN_HEADER = "Authorization"

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // //add the jwt token (jwttoken) request
        // let authRequest=req;
        // const token= this.loginService.getToken();
        // if(token!=null){
        //     authRequest = authRequest.clone({
        //     setHeaders: {TOKEN_HEADER:`Bearer ${token}`},
        // });
        // }

        const localToken = localStorage.getItem('token');
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localToken)})
        return next.handle(req);
    }
    
}
export const authInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];