import { Component } from '@angular/core';
import { HostBindingFromDecoratorComponent } from '../host-binding-from-decorator/host-binding-from-decorator.component';

@Component({
  selector: 'app-host-binding-from-decorator-layout',
  standalone: true,
  imports: [HostBindingFromDecoratorComponent],
  template: `
  <app-host-binding-from-decorator role="priority" [style.font-size.px]="30"></app-host-binding-from-decorator>
  `,
  styles: ``
})
export class HostBindingFromDecoratorLayoutComponent {

}
