import { Component, inject } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { IToDo } from '../../../ng-container-example/async-example/async-example.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-http-cliet-usage',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <div class="content">
    @for (todo of todos; track $index) {
      {{todo | json}}
    }
    </div>

  `,
  styles: ``
})
export class HttpClietUsageComponent {
  api = inject(ApiService)
  todos:IToDo[] = []
  constructor() {

  this.api.getToDosResponse().subscribe((res:HttpResponse<IToDo[]>) => {
      console.log(res);
      if (res.body) {
        this.todos = res.body
      }
    },
  (err:HttpErrorResponse) => {
    console.log(err);
    
  })
  this.api.getToDos().subscribe((res) => {
    console.log(res);
    this.todos = res
    
  })
  this.api.getToDosEvent().subscribe((res:HttpEvent<IToDo[]>) => {
          switch (res.type) {
        case HttpEventType.Sent:
          console.log('запрос был отправлен');
          break;
        case HttpEventType.ResponseHeader:
          console.log('получены заголовки');
          break;
        case HttpEventType.DownloadProgress:
          console.log(`загружено ${res.loaded} байт`);
          break;
      
        case HttpEventType.Response:
          console.log(`ответ получен`);
          console.log(res);
          
          break;
      
        default:
          break;
      }
  })
  this.api.getToDoById(1).subscribe((res) => {
    console.log(res);
    this.todos = res
  })
  this.api.getToDoByParams({
    id:1,
    fio:'skomorokhov'
  }).subscribe((res) => {
    console.log(res);
    this.todos = res
  })
  this.api.createTodo({
    userId: 1,
    id: 1,
    title: 'test',
    completed: true,
  }).subscribe((res) => {
    console.log(res);
    
  })
  let file!:File
  this.api.createTodoMultiPartFormData(file).subscribe((res) => {
    console.log(res);
    
  })
  this.api.updateToDo({
      id: 1,
      title: 'test2',
    }).subscribe((res) => {
      console.log(res);
      
    })
  this.api.getSomething().subscribe()
  }

}
