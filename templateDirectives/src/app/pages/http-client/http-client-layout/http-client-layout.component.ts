import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';


@Component({
  selector: 'app-http-client-layout',
  standalone: true,
  imports: [NgStyle, TuiTabs, RouterOutlet, RouterModule],
  template: `
    <div class="tabs">
      <tui-tabs [(activeItemIndex)]="activeItemIndex">
        <button
          tuiTab
          routerLink="/http-client/usage"
          routerLinkActive="router-link-active"
        >
          Использование и подключение
        </button>
      </tui-tabs>
    </div>

    <div class="tabs-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``
})
export class HttpClientLayoutComponent {
  activeItemIndex = 0

}
