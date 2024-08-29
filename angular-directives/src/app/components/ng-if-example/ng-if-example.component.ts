import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, from, tap } from 'rxjs';

@Component({
  selector: 'app-ng-if-example',
  standalone: true,
  imports: [NgIf, FormsModule, AsyncPipe],
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.scss'],
})
export class NgIfExampleComponent {
  condition = true;
  longCondition = true;
  otherLongCondition = true;
  permission = 'admin';
  dataSource$ = from(['Hero']).pipe(
    delay(7000),
    tap((res) => {
      res;
    })
  );
}
