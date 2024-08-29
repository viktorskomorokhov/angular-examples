import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { items } from 'src/app/models/frameworks';

@Component({
  selector: 'app-ng-for-example',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgIf, NgStyle],
  templateUrl: './ng-for-example.component.html',
  styleUrl: './ng-for-example.component.scss',
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('300ms', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('300ms', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NgForExampleComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('check');
  }
  active = true;
  frameworks = [...items];
  frameworksDataSource$ = this.getItemsFromApi();
  getItemsFromApi(): Observable<string[]> {
    return of(items).pipe(delay(5000));
  }
  trackByFn(index: number, item:string): number {
    return index;
  }
  pushItem() {
    this.frameworks.push('new');
    console.log(items);
  }
  removeItem() {
    this.frameworks.pop()
  }
}
