import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-ng-container-example',
  standalone: true,
  imports: [NgStyle, TuiTabs, RouterOutlet, RouterModule],
  template: `
    <div class="tabs">
      <tui-tabs [(activeItemIndex)]="activeItemIndex">
        <button
          tuiTab
          routerLink="/ng-container/tags"
          routerLinkActive="router-link-active"
        >
          ТЕГ
        </button>

        <button
          tuiTab
          routerLink="/ng-container/example"
          routerLinkActive="router-link-active"
        >
          Пример использования с структурной директивой
        </button>
        <button
          tuiTab
          routerLink="/ng-container/async-example"
          routerLinkActive="router-link-active"
        >
          Пример использования с async
        </button>
        <button
          tuiTab
          routerLink="/ng-container/multiplie-example"
          routerLinkActive="router-link-active"
        >
          Пример использования с несколькими директивами
        </button>
      </tui-tabs>
    </div>

    <div class="tabs-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class NgContainerExampleComponent {
  activeItemIndex = 0;
}
