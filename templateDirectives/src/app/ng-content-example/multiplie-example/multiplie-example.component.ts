import { Component } from '@angular/core';
import { MultiplieContentProjectionComponent } from './multiplie-content-projection/multiplie-content-projection.component';
import { DumbExampleComponent } from './dumb-example/dumb-example.component';

@Component({
  selector: 'app-multiplie-example',
  standalone: true,
  imports: [MultiplieContentProjectionComponent,DumbExampleComponent],
  template: `
    <h1 class="fs-40 bold mb-30">*При нескольких ng-content без select, контент процецируется в самый последний ng-content в шаблоне</h1>
    <app-multiplie-content-projection>
      <div class="fs-20"content1>
        <p class="fs-20">Контент из родителя по атрибуту</p>
      </div>
      <div class="content2 fs-20">Контент из родителя по классу</div>
      <h2 class="fs-20">Контент из родителя по тегу</h2>
      <app-dumb-example></app-dumb-example>
      <h1 class="content2 fs-20" content1>Самый приоритетный селектор</h1>
      <p class="angular fs-20">Angular</p>
      <p class="react fs-20">React</p>
      <p class="vue fs-20">Vue</p>
      <h3 class="fs-20">Без селектора</h3>
      <h4 class="fs-20 footer" ngProjectAs='footer'>Делаем вид что это footer</h4>
      <span class="final-example fs-20">Последний пример</span>
    </app-multiplie-content-projection>
  `,
  styles: `
  .mb-30 {
    margin-bottom:40px
  }
  `,
})
export class MultiplieExampleComponent {}
