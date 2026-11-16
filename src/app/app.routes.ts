import { Routes } from '@angular/router';

import { AppShell } from './core/shell/app-shell';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/workbench/workbench-page').then((m) => m.WorkbenchPage),
        title: 'RenderLab Workbench',
      },
      {
        path: 'layout',
        loadComponent: () =>
          import('./features/layout-lab/layout-lab-page').then((m) => m.LayoutLabPage),
        title: 'Layout Lab',
      },
      {
        path: 'rendering',
        loadComponent: () =>
          import('./features/rendering-lab/rendering-lab-page').then((m) => m.RenderingLabPage),
        title: 'Rendering Lab',
      },
      {
        path: 'loading',
        loadComponent: () =>
          import('./features/loading-lab/loading-lab-page').then((m) => m.LoadingLabPage),
        title: 'Loading Lab',
      },
      {
        path: 'runtime',
        loadComponent: () =>
          import('./features/runtime-lab/runtime-lab-page').then((m) => m.RuntimeLabPage),
        title: 'Runtime Lab',
      },
    ],
  },
];
