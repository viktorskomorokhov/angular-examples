import { NgStyle } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MyPopupComponent } from './example/my-popup/my-popup.component';
import { SimpleContentProjectionComponent } from './simple-example/simple-content-projection/simple-content-projection.component';
import { MultiplieContentProjectionComponent } from './multiplie-example/multiplie-content-projection/multiplie-content-projection.component';
import { TuiTabs } from '@taiga-ui/kit';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-ngcontentexample',
  standalone: true,
  imports: [
    MyPopupComponent,
    SimpleContentProjectionComponent,
    MultiplieContentProjectionComponent,
    NgStyle,
    TuiTabs,
    RouterOutlet,
    RouterModule
  ],
  template: `
    <div class="tabs">
    <tui-tabs [(activeItemIndex)]="activeItemIndex">
      <button tuiTab routerLink="/ng-content/tags" routerLinkActive="router-link-active" >ТЕГ</button>
      
      <button tuiTab  routerLink="/ng-content/simple-content" routerLinkActive="router-link-active">
        Компонент с 1 ng-content
      </button>
      <button tuiTab routerLink="/ng-content/multiplie-content" routerLinkActive="router-link-active">
        Компонент с несколькими ng-content
      </button>
      <button tuiTab routerLink="/ng-content/example" routerLinkActive="router-link-active">Пример использования</button>
    </tui-tabs>
    </div>

    <div class="tabs-wrapper">
    <router-outlet></router-outlet>
    </div>

  `,
  styles: `


  `,
})
export class NgContentExampleComponent {

  protected activeItemIndex = 0;

  @ViewChild('simpleContent') simpleContent!: SimpleContentProjectionComponent;
}
