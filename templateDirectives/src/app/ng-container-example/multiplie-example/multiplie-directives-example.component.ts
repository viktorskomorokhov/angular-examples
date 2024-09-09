import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IToDo } from '../async-example/async-example.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-multiplie-example',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NgStyle],
  template: `
    <ng-container *ngIf="getTodosDataSource$ | async as todos">
      <ng-container class="todo" *ngFor="let todo of todos">
        <ng-container *ngIf="!todo.completed">
          <div class="todo">
            <div>ToDo id: {{ todo.id }}</div>
            <div [ngStyle]="{ color: todo.completed ? 'red' : 'blue' }">
              {{ todo.title }}
            </div>
            <div>CreatedBy: {{ todo.userId }}</div>
          </div>
        </ng-container>
      </ng-container>
    </ng-container>
  `,
  styles: `
    .todo {
      border: 1px solid gray;
    }
    :host {
      gap:10px;
      display:flex;
      flex-direction:column;
    }
  `,
})
export class MultiplieDirectivesExampleComponent {
  http = inject(HttpClient);
  getTodos(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  getTodosDataSource$ = this.getTodos();
}
