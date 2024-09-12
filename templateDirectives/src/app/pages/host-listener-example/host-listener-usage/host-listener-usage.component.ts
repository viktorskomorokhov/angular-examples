import { Component, HostListener, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-host-listener-usage',
  standalone: true,
  imports: [],
  template: `
  <p>   
    {{counter}}
</p>

  `,
  styles: `
  :host {
    height:100px;
    background-color:grey;
    width:100%;
    display:flex;
    align-items: center;

  }
  p {
    font-size: 50px;
    color: white;
  }
`,
})
export class HostListenerUsageComponent  {
 

  counter = 0
//   zone = inject(NgZone)
//  @HostListener('mousemove')
//  onMoluseMove():void {
//   this.zone.runOutsideAngular(() => {
//     this.counter += 1
//   })

//  }
//  onMouseClick(e:any):void {
//   console.log(e);
  
//  }
//  @HostListener('mouseenter') 
//  onEnter():void {
//   console.log('onEnter');
  
//   this.counter += 1

//  }
//  @HostListener('mouseleave') 
//  onLeave():void {
//   console.log('onleave');
//   this.counter += 1

//  }
//  @HostListener('document:keydown', ['$event'])
//  updateValue(event: KeyboardEvent) {
//    console.log(event);
   
//  }
 @HostListener('window:keydown.escape', [
  '$event',
  '$event.target'
])
 updateValueFiltered(event: KeyboardEvent, target:any) {
  console.log(target);
   console.log(event);
   
 }
}
