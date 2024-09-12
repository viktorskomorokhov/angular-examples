import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-binding-from-decorator',
  standalone: true,
  imports: [],
  template: `
    <p>
      host-binding-from-decorator works!
    </p>
  `,
  styles: ``,
  host: {
    '[class.active]':'show',
    'role':'user',
    '(mouseenter)': 'onMouseEnter($event)',
    '[style.font-size.px]':'fontSize'
  }
})
export class HostBindingFromDecoratorComponent {
  show = true
  fontSize = 20
  @HostBinding('class.active') 
   isActive =  true
  @HostBinding('attr.role') 
   role = 'admin'
  @HostBinding('style.font-size.px') 
   fSize = 40
  onMouseEnter(event:any):void {
    console.log(event);
    this.fontSize = Math.floor(Math.random() * (35 - 5 + 1) + 5)
    
  }
}
