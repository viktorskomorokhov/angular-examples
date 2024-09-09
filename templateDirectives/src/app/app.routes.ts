import { Routes } from '@angular/router';
import { HostBindingFromDecoratorLayoutComponent } from './host-binding-example/host-binding-from-decorator-layout/host-binding-from-decorator-layout.component';
import { HostBindingUsageComponent } from './host-binding-example/host-binding-usage/host-binding-usage.component';
import { AsyncExample } from './ng-container-example/async-example/async-example.component';
import { ContainerExamplesComponent } from './ng-container-example/container-examples/container-examples.component';
import { ContainerTagsComponent } from './ng-container-example/container-tags/container-tags.component';
import { MultiplieDirectivesExampleComponent } from './ng-container-example/multiplie-example/multiplie-directives-example.component';
import { ExampleComponent } from './ng-content-example/example/example.component';
import { MultiplieExampleComponent } from './ng-content-example/multiplie-example/multiplie-example.component';
import { SimpleExampleComponent } from './ng-content-example/simple-example/simple-example.component';
import { TagsComponent } from './ng-content-example/tags/tags.component';
import { NgTemplateTagComponent } from './ng-template-example/ng-template-tag/ng-template-tag.component';
import { NgTemplateUsageExampleComponent } from './ng-template-example/ng-template-usage-example/ng-template-example.component';
import { HostListenerUsageComponent } from './host-listener-example/host-listener-usage/host-listener-usage.component';

export const routes: Routes = [
  {
    path: 'ng-content',
    loadComponent: () =>
      import('./ng-content-example/ng-content-example.component').then(
        (c) => c.NgContentExampleComponent
      ),
    children: [
      {
        path: 'tags',
        component: TagsComponent,
      },
      {
        path: 'simple-content',
        component: SimpleExampleComponent,
      },
      {
        path: 'multiplie-content',
        component: MultiplieExampleComponent,
      },
      {
        path: 'example',
        component: ExampleComponent,
      },
      {
        path: '**',
        redirectTo: 'tags',
      },
    ],
  },
  {
    path: 'ng-container',
    loadComponent: () =>
      import('./ng-container-example/ng-container-example.component').then(
        (c) => c.NgContainerExampleComponent
      ),
    children: [
      {
        path: 'tags',
        component: ContainerTagsComponent,
      },
      {
        path: 'example',
        component: ContainerExamplesComponent,
      },
      {
        path: 'async-example',
        component: AsyncExample,
      },
      {
        path: 'multiplie-example',
        component: MultiplieDirectivesExampleComponent,
      },
      {
        path: '**',
        redirectTo: 'tags',
      },
    ],
  },
  {
    path: 'ng-template',
    loadComponent: () =>
      import('./ng-template-example/ng-template-example.component').then(
        (c) => c.NgTemplateExampleComponent
      ),
    children: [
      {
        path: 'tag',
        component: NgTemplateTagComponent,
      },
      {
        path: 'example',
        component: NgTemplateUsageExampleComponent,
      },
      {
        path: '**',
        redirectTo: 'tag',
      },
    ],
  },
  {
    path: 'hostBinding',
    loadComponent: () =>
      import('./host-binding-example/host-binding-example.component').then(
        (c) => c.HostBindingExampleComponent
      ),
    children: [
      {
        path: 'usage',
        component: HostBindingUsageComponent,
      },
      {
        path: 'host',
        component: HostBindingFromDecoratorLayoutComponent,
      },
      {
        path: '**',
        redirectTo: 'usage',
      },
    ],
  },
  {
    path: 'hostListener',
    loadComponent: () =>
      import('./host-listener-example/host-listener-example.component').then(
        (c) => c.HostListenerExampleComponent
      ),
      children: [
        {
          path:'usage',
          component:HostListenerUsageComponent
        },
        {
          path: '**',
          redirectTo:'usage'
        }
      ]
  },
];
