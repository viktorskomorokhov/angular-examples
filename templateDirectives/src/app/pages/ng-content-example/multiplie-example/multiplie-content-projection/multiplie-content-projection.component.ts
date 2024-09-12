import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplie-content-projection',
  standalone: true,
  imports: [],
  template: `
  <div class="content fs-20">
    <p>Блок с первым контентом в ребенке (атрибут):</p>
    <ng-content select="[content1]" ></ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с вторым контентом в ребенке (класс):</p>
      <ng-content select=".content2"></ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с третьим контентом в ребенке (тег):</p>
      <ng-content select="h2"></ng-content>
      <ng-content select="app-dumb-example"></ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с четвертым контентом в ребенке (комбинации селекторов):</p>
      <ng-content select="p:not(.react):not(.vue)"></ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с пятым контентом в ребенке (без select):</p>
      <ng-content>
      </ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с шестым контентом в ребенке (ngProjectAs):</p>
      <ng-content select="footer">
      </ng-content>
  </div>
  <div class="content fs-20">
    <p>Блок с седьмым контентом в ребенке (контент по умолчанию):</p>
      <ng-content select=".final-example">
        Это контент по умолчанию, ничего не передали
      </ng-content>
  </div>


  `,
  styles: `

  :host {
    display:flex;
    flex-direction:column;
    gap:10px;
  }
  `
})
export class MultiplieContentProjectionComponent {

}
