import { NgStyle } from '@angular/common';
import { Component, ViewChildren } from '@angular/core';
import { SimpleContentProjectionComponent } from './simple-content-projection/simple-content-projection.component';

@Component({
  selector: 'app-simple-example',
  standalone: true,
  imports: [SimpleContentProjectionComponent, NgStyle],
  template: `
    <app-simple-content-projection #simpleContent>
      <div class="fx-col wrapper">
        <h1 class="fs-20" [ngStyle]="{ color: toggle ? 'red' : 'black' }">
          NG CONTENT EXAMPLE
        </h1>
        <button class="fs-20" (click)="toggle = !toggle">поменять цвет</button>
        <button
          class="fs-20"
          (click)="simpleContent.childToggle = !simpleContent.childToggle"
        >
          поменять свойство в ребенке
        </button>
      </div>
    </app-simple-content-projection>
  `,
  styles: `
  .wrapper {
    gap:20px;
  }
  button {
    border:1px solid black;
    width:200px;
    background-color:rgb(221, 221, 221);
  }
  button:hover {
    background-color: rgb(105, 102, 102);
  }
  `,
})
export class SimpleExampleComponent {
  toggle = false;
}
