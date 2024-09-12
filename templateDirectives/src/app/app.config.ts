import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AuthFromDIInterceptor } from './interceptors/auth-from-di.interceptor';
import { changeBodyInterceptor } from './interceptors/change-body.interceptor';
export const BASE_URL = new InjectionToken<string>('baseUrl for http calls');
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthFromDIInterceptor,
      multi: true,
    },
    NG_EVENT_PLUGINS,
    {
      provide: BASE_URL,
      useValue: 'https://jsonplaceholder.typicode.com',
    },
  ],
};
