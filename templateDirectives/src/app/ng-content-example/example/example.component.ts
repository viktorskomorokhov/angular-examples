import { Component } from '@angular/core';
import { MyPopupComponent } from './my-popup/my-popup.component';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [MyPopupComponent,NgOptimizedImage],
  template: `
    <div class="ng-content-example">
      
      <button (click)="isModalOpened = true">Открыть диалог</button>
      <app-my-popup
        [isOpened]="isModalOpened"
        (onClose)="isModalOpened = false"
      >
      <ng-container modal-header-title>
        <h1>Тут могла быть ваша реклама</h1>
      </ng-container>
      
      <ng-container modal-body>
        <img ngSrc="/qr.jpg" alt="" width="300"
        height="400" priority>
      </ng-container>
      
      </app-my-popup>
    </div>
  `,
  styles: ``,
})
export class ExampleComponent {
  toggle = false;
  isModalOpened = false;
}
