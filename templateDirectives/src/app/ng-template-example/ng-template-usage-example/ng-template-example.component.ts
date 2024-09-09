import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  template: `
    <p class="fs-20">Прямое указание</p>
    <div class="content">
      <ng-template [ngIf]="show"> гип гип ура! </ng-template>
    </div>
    <p class="fs-20">Косвенное указание</p>
    <div class="content">
      <ng-template #example let-name="name" let-lastName="lastName">
        <p>Привет {{ name }} {{ lastName }}</p>
      </ng-template>

      <div
        class="teamplte"
        *ngTemplateOutlet="
          example;
          context: {
            name: 'Viktor',
            lastName: 'Skomorokhov'
          }
        "
      ></div>
    </div>
  `,
  styles: `
  .content {
    margin:10px;
  }
  `,
})
export class NgTemplateUsageExampleComponent {
  todos = ['1', '2', '3'];
  show = true;
}
