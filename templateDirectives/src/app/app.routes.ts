import { Routes } from '@angular/router';
import { TagsComponent } from './pages/ng-content-example/tags/tags.component';
import { SimpleExampleComponent } from './pages/ng-content-example/simple-example/simple-example.component';
import { MultiplieExampleComponent } from './pages/ng-content-example/multiplie-example/multiplie-example.component';
import { ExampleComponent } from './pages/ng-content-example/example/example.component';
import { HttpClietUsageComponent } from './pages/http-client/http-client-layout/http-cliet-usage/http-cliet-usage.component';
import { HostListenerUsageComponent } from './pages/host-listener-example/host-listener-usage/host-listener-usage.component';
import { HostBindingUsageComponent } from './pages/host-binding-example/host-binding-usage/host-binding-usage.component';
import { HostBindingFromDecoratorLayoutComponent } from './pages/host-binding-example/host-binding-from-decorator-layout/host-binding-from-decorator-layout.component';
import { NgTemplateUsageExampleComponent } from './pages/ng-template-example/ng-template-usage-example/ng-template-example.component';
import { NgTemplateTagComponent } from './pages/ng-template-example/ng-template-tag/ng-template-tag.component';
import { MultiplieDirectivesExampleComponent } from './pages/ng-container-example/multiplie-example/multiplie-directives-example.component';
import { AsyncExample } from './pages/ng-container-example/async-example/async-example.component';
import { ContainerExamplesComponent } from './pages/ng-container-example/container-examples/container-examples.component';
import { ContainerTagsComponent } from './pages/ng-container-example/container-tags/container-tags.component';
import { UserListComponent } from './pages/http-client/http-client-layout/user-list/user-list.component';


export const routes: Routes = [
  {
    path: 'ng-content',
    loadComponent: () =>
      import('./pages/ng-content-example/ng-content-example.component').then(
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
      import('./pages/ng-container-example/ng-container-example.component').then(
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
      import('./pages/ng-template-example/ng-template-example.component').then(
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
      import('./pages/host-binding-example/host-binding-example.component').then(
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
      import('./pages/host-listener-example/host-listener-example.component').then(
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
  {
    path:'http-client',
    loadComponent: () => import('./pages/http-client/http-client-layout/http-client-layout.component').then((c) => c.HttpClientLayoutComponent),
    children: [
      {
        path:'usage',
        component:HttpClietUsageComponent
      },
      {
        path:'users-list',
        component:UserListComponent
      },
      {
        path:'**',
        redirectTo:'usage'
      }
    ]
  }
];
