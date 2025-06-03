import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cousers' },
  {
    path: 'cousers',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];
