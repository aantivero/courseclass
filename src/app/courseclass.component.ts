import { Component } from '@angular/core';
import { CoursesComponent} from './courses.component';

@Component({
  moduleId: module.id,
  selector: 'courseclass-app',
  template: '<h1>{{title}}</h1><courses></courses>',
  directives: [CoursesComponent]
})
export class CourseclassAppComponent {
  title = 'courseclass works!';
}
