import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesSercice } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [BrowserModule],
  //mettre dans le tableau des providers les dépendances qui va creer une seule instance
  providers: [CoursesSercice, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
