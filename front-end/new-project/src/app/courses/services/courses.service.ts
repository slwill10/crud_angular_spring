import { HttpClient } from '@angular/common/http';
import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {  }

  find_all() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(2),
      tap()
    );
  }
}
