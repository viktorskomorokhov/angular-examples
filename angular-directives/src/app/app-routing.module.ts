import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"ngclass",
    loadComponent: () => import('./components/ng-class-example/ng-class-example.component').then(c => c.NgClassExampleComponent )
  },
  {
    path:"ngstyle",
    loadComponent: () => import('./components/ng-style-example/ng-style-example.component').then(c => c.NgStyleExampleComponent)
  },
  {
    path:"ngmodel",
    loadComponent: () => import('./components/ng-model-example/ng-model-example.component').then(c => c.NgModelExampleComponent)
  },
  {
    path:"ngif",
    loadComponent: () => import('./components/ng-if-example/ng-if-example.component').then(c => c.NgIfExampleComponent)
  },
  {
    path:"ngfor",
    loadComponent: () => import('./components/ng-for-example/ng-for-example.component').then(c => c.NgForExampleComponent)
  },
  {
    path:"ngswitch",
    loadComponent: () => import('./components/ng-switch-example/ng-switch-example.component').then(c => c.NgSwitchExampleComponent)
  },
  {
    path:"ngtemplate",
    loadComponent: () => import('./components/ng-outlet/ng-outlet.component').then(c => c.NgOutletComponent)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
