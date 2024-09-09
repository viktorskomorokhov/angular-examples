import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-host-binding-usage',
  standalone: true,
  imports: [],
  template: `
    <p>host-binding-usage works!</p>
    <button (click)="changeStyle()">Поменять</button>
  `,
  styles: `
  :host {
    display:flex;
    flex-direction:column; 
   }
   button {
    border: 1px solid black;
    width:100px;
    background-color:white;
    color:black;
   }
  `,
})
export class HostBindingUsageComponent {
  disabled = false;
  @HostBinding('style.font-size.px') fontSize = 20;
  @HostBinding('style.background-color') backgroundColor = 'brown';
  @HostBinding('class.active') active = true;
  @HostBinding('attr.role') role = 'user';
  @HostBinding('class')
  classObj = {
    touched: true,
    active: true,
  };
  @HostBinding('style')
  styleObj = {
    'font-size': '30px',
    color: 'white',
  };
  // @HostBinding('style.color')
  // get color(): string {
  //   return this.disabled ? 'white' : 'black';
  // }
  @HostBinding('style.font-size.px')
  @Input()
  fSize = 20;
  changeStyle(): void {
    // this.disabled = !this.disabled
    this.styleObj = {
      'font-size': '30px',
      color: 'blue',
    }
  }
}
