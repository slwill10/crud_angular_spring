import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CoursesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
