import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';
@Component({
  selector: 'app-host-binding-example',
  standalone: true,
  imports: [TuiTabs, RouterOutlet, RouterModule],
  template: `
    <div class="tabs">
      <tui-tabs [(activeItemIndex)]="activeItemIndex">
        <button
          tuiTab
          routerLink="/hostBinding/usage"
          routerLinkActive="router-link-active"
        >
          Использование HostBinding
        </button>
        <button
          tuiTab
          routerLink="/hostBinding/host"
          routerLinkActive="router-link-active"
        >
          Использование host 
        </button>
      </tui-tabs>
    </div>

    <div class="tabs-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``
})
export class HostBindingExampleComponent {
  activeItemIndex = 0
}
