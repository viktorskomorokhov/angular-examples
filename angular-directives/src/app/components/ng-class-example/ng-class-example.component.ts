import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.scss'],
  standalone: true,
  imports: [NgClass,FormsModule],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgClassExampleComponent  {
  key = false
  currentClasses = {
    key: this.key,
  };
  active = true
  setCurrentClasses() {
    this.key = !this.key
    this.currentClasses = {
      key: this.key,

    };
  }
  mutateCurrentClasses() {
    this.key = !this.key
    this.currentClasses.key = this.key
  }

}
