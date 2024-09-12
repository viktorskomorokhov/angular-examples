import {
  HttpClient,
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.config';
import { IToDo } from '../pages/ng-container-example/async-example/async-example.component';
import { Is_AUTH_NEEDED } from '../interceptors/auth.interceptor';
export interface IOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body' | 'events' | 'response';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType: 'text' | 'blob' | 'arraybuffer' | 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  baseApi = inject(BASE_URL);
  constructor() {}
  options: IOptions = {
    headers: new HttpHeaders().set('Auth', 'JWT/bearer/etc'),
    params: new HttpParams().set('id', 1),
    observe: 'body', // 'body' | 'events' | 'response'
    reportProgress: false,
    responseType: 'json', //'text' | 'blob | 'arraybuffer'
    withCredentials: false,
  };
  /**
   * Метод GET Принимает два параметра: url и options?:
   *
   */
  getToDos(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(`${this.baseApi}/todos/`);
  }
  getToDosResponse(): Observable<HttpResponse<IToDo[]>> {
    return this.http.get<IToDo[]>(`${this.baseApi}/todos/`, {
      observe: 'response', 
      responseType: 'json', 
    });
  }
  getToDosEvent(): Observable<HttpEvent<IToDo[]>> {
    return this.http.get<IToDo[]>(`${this.baseApi}/todos/`, {
      observe: 'events', 
      responseType: 'json', 
    })
  }

  getToDoById(id: number): Observable<IToDo[]> {
    let params = new HttpParams()
    params = params.append('id', id) 
    params = params.append('fio', 'skomorokhov') 
    return this.http.get<IToDo[]>(`${this.baseApi}/todos/`, {
      params
    });
  }
  getToDoByParams(paramsObj:Record<string,any>): Observable<IToDo[]> {
    let params = new HttpParams({
      fromObject:paramsObj
    })

    return this.http.get<IToDo[]>(`${this.baseApi}/todos/`, {
      params
    });
  }
    /**
   * Метод POST Принимает три параметра: url,body, options?:
   *
   */
  createTodo(todo:IToDo): Observable<IToDo> {
    return this.http.post<IToDo>(`${this.baseApi}/todos/`, todo);
  }
  createTodoMultiPartFormData(file:File): Observable<IToDo> {
    let data = new FormData()
    data.set('todo',file)
    return this.http.post<IToDo>(`${this.baseApi}/todos/`, data);
  }
    /**
   * Метод DELETE Принимает два параметра: url, options?:
   *
   */
  deleteToDoById(id: number): Observable<IToDo> {
    return this.http.delete<IToDo>(`${this.baseApi}/todos/${id}`, );
  }
    /**
   * Метод PATCH Принимает три параметра: url,body, options?:
   *
   */
  updateToDo(todo:Partial<IToDo>): Observable<Partial<IToDo>> {
    return this.http.patch<IToDo>(`${this.baseApi}/todos/${todo.id}`,todo);
  }
    /**
   * Метод PUT Принимает три параметра: url,body, options?:
   *
   */
  changeToDo(todo:IToDo):Observable<IToDo> {
    return this.http.put<IToDo>(`${this.baseApi}/todos/`,todo)
  }
  getSomething():Observable<IToDo> {

    const context = new HttpContext().set(Is_AUTH_NEEDED,false)
    return this.http.get<IToDo>(`${this.baseApi}/todos/`, {
      context
    })
  }
}
