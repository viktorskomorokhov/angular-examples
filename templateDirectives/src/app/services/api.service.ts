import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BASE_URL } from '../app.config'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    http = inject(HttpClient)
    baseApi = inject(BASE_URL)
  constructor() { }
  getData():Observable<any> {
 return this.http.get(`${this.baseApi}/todos/`) 
    
 }
}
