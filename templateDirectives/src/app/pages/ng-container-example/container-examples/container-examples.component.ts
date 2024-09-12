import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container-examples',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <div class="content">
      <div class="content">
        <ng-container *ngIf="toggle">
          <div class="first-example">Пример использования c ngIf</div>
        </ng-container>
      </div>
      <div class="content">
        <div class="first-example" *ngIf="toggle">Эквивалентная запись</div>
      </div>
    </div>
    <div class="content">
      <div class="content">
        <ng-container *ngFor="let todo of todos">
          <div>Пример использования с ngFor {{ todo }}</div>
        </ng-container>
      </div>
      <div class="content">
        <div class="first-example" *ngFor="let todo of todos">
          Эквивалентная запись {{ todo }}
        </div>
      </div>
    </div>
  `,

  styles: `
    :host {
    display:flex;
    flex-direction:column;
    gap:10px;
    }
    .content {
      margin:10px;
    }
  `,
})
export class ContainerExamplesComponent {
  toggle = true;
  todos = ['1', '2', '3', '4'];
}
