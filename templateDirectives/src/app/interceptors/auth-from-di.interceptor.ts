import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Is_AUTH_NEEDED } from './auth.interceptor';

@Injectable()
export class AuthFromDIInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('from DI');
    
    const isAuthNeeded = request.context.get(Is_AUTH_NEEDED)
    if (isAuthNeeded) {
      const clonedReq = request.clone({
        setHeaders: {
          'Auth2': 'JWT'
        }
      })
      return next.handle(clonedReq)
    }
    return next.handle(request)
  }
}
