import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-host-listener-example',
  standalone: true,
  imports: [TuiTabs, RouterOutlet, RouterModule],
  template: `
    <div class="tabs">
      <tui-tabs [(activeItemIndex)]="activeItemIndex">
        <button
          tuiTab
          routerLink="/hostListener/usage"
          routerLinkActive="router-link-active"
        >
        Использование hostListener
        </button>
      </tui-tabs>
    </div>

    <div class="tabs-wrapper">
      <router-outlet></router-outlet>
    </div>
    `,
  styles: ``
})
export class HostListenerExampleComponent {
  activeItemIndex = 0
}
