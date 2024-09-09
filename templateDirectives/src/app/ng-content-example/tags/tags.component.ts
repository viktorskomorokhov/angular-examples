import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  template: `
    <p class="fs-20">Тег p</p>
    <a href="" class="fs-20">Тег а</a>
    <div class="fs-20">Div</div>
    <h1 class="fs-20">h1</h1>
    <span class="fs-20">спан</span>
     <!-- В версиях до 18 -->
    <ng-content></ng-content>
    <!-- В версиях с 18 -->
    <ng-content>Хелоу ворлд</ng-content>
    <ng-content><div class="fs-20">Хелоу ворлд в div</div></ng-content>
  `,
  styles: ``
})
export class TagsComponent {

}
