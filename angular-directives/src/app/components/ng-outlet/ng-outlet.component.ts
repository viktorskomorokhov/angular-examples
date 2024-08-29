import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-ng-outlet',
  standalone: true,
  imports: [CardComponent,NgTemplateOutlet],
  templateUrl: './ng-outlet.component.html',
  styleUrl: './ng-outlet.component.scss'
})
export class NgOutletComponent {

}