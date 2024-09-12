import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
export const Is_AUTH_NEEDED = new HttpContextToken(() => true)

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('from func');
    console.log(req);
    
    const isAuthNeeded = req.context.get(Is_AUTH_NEEDED)
    if (isAuthNeeded) {
      const clonedReq = req.clone({
        setHeaders: {
          'Auth': 'JWT'
        }
      })
      return next(clonedReq)
    }
  return next(req);
};
