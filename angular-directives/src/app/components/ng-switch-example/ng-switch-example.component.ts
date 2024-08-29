import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

enum EFeature {
  first = 'first',
  second = 'second',
  third = 'third',
  default = '',
}

@Component({
  selector: 'app-ng-switch-example',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ng-switch-example.component.html',
  styleUrl: './ng-switch-example.component.scss',
})
export class NgSwitchExampleComponent {
  public featureEnum = EFeature
  feature = EFeature.first
  withError: 'first' | 'second' | 'third' = 'first'
}
