import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from './modules/courses/components/course-card/course-card.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CourseCardComponent,
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
