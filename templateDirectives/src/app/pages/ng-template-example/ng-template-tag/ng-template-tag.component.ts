import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-tag',
  standalone: true,
  imports: [],
  template: `
    <p>Гип!</p>
    <ng-template>
      <p>Гип!</p>
    </ng-template>
    <p>Ура!</p>
  `,
  styles: ``,
})
export class NgTemplateTagComponent {}
