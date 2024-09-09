import { Component } from '@angular/core';

@Component({
  selector: 'app-container-tags',
  standalone: true,
  imports: [],
  template: `
     <p class="fs-20">Тег p</p>
    <a href="" class="fs-20">Тег а</a>
    <div class="fs-20">Div</div>
    <h1 class="fs-20">h1</h1>
    <span class="fs-20">спан</span>
    <ng-container>Хелоу ворлд</ng-container>
    <ng-container><div>Хелоу ворлд</div></ng-container>
  `,
  styles: ``
})
export class ContainerTagsComponent {

}
