import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-ng-template-example',
  standalone: true,
  imports: [TuiTabs, RouterOutlet, RouterModule],
  template: `
    <div class="tabs">
      <tui-tabs [(activeItemIndex)]="activeItemIndex">
        <button
          tuiTab
          routerLink="/ng-template/tag"
          routerLinkActive="router-link-active"
        >
          ТЕГ
        </button>
        <button
          tuiTab
          routerLink="/ng-template/example"
          routerLinkActive="router-link-active"
        >
          Пример использования (прямое/косвенное указание)
        </button>
      </tui-tabs>
    </div>

    <div class="tabs-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class NgTemplateExampleComponent {
  activeItemIndex = 0;
}
