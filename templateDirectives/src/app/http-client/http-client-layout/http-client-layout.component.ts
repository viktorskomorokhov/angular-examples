import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';
import { ApiService } from '../../services/api.service';


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
  api = inject(ApiService)
  constructor() {
    this.api.getData().subscribe()
  }
}
