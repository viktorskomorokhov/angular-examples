import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style-example',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.scss'],
})
export class NgStyleExampleComponent  {
  active = true;
  style = {
    color: 'red',
  };
  currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    'font-weight': false ? 'bold' : 'normal',
    'font-size': true ? '24px' : '12px',
  };
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': false ? 'italic' : 'normal',
      'font-weight': true ? 'bold' : 'normal',
      'font-size': false ? '24px' : '12px',
    };
  }
  mutateCurrentStyles() {
    const size = `${this.randomIntFromInterval(10, 40)}px`;
    this.currentStyles['font-size'] = size;
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
