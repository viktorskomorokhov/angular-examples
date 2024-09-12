import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-content-projection',
  standalone: true,
  imports: [],
  template: `
    <ng-content></ng-content>


    {{childToggle}}
  `,
  styles: ``
})
export class SimpleContentProjectionComponent {
  childToggle = false
}
