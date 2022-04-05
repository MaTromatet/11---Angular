import { Component } from '@angular/core';
import { CoursesSercice } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let courses of courses">
        {{ courses }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  //injection de dépendance en passant en paramettre du construteur le Service. Angular va instancier automatiquement le composant mais il faut aller le renseigner dans app.module.ts
  constructor(service: CoursesSercice) {
    this.courses = service.getCourses();
  }
}
