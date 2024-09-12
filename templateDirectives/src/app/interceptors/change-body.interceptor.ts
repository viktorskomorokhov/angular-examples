import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const changeBodyInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(
    map(event => {
      console.log(event);
      
      if (event instanceof HttpResponse) {
        const newResponce = event.clone({
          body:[]
        })
        return newResponce
      }
      return event
    })
  )
};
