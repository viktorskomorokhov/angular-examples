import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-example',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NgModelExampleComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('check');
    
  }
  oneWay = 'одна сторона'
  twoWay = 'две стороны'
  selectedValue = 'Angular'
  items = [
    'Angular',
    'Vue',
    'React',
    'JQuery',
    'Svelte',
    'Solid'
  ]
}
