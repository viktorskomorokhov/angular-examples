import { AsyncPipe, NgIf, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
export interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-async-example',
  standalone: true,
  imports: [NgIf, AsyncPipe,NgStyle],
  template: `
    <ng-container *ngIf="todosDataSourse$ | async as todo">
      <div class="todo" >
        <div> ToDo id: {{ todo.id }}</div>
        <div [ngStyle]="{ color: todo.completed ? 'red' : 'blue' }">
          {{ todo.title }}
        </div>
        <div> CreatedBy: {{ todo.userId }}</div>
      </div>
    </ng-container>
  `,
  styles: `
  :host {
  }
  `,
})
export class AsyncExample {
  http = inject(HttpClient);
  getTodoById(id = 1): Observable<IToDo> {
    return this.http.get<IToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
  todosDataSourse$ = this.getTodoById();
}
