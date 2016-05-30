import { Component } from '@angular/core';
import { CoursesComponent} from './courses.component';
import { AuthorsComponent } from './authors.component';

@Component({
  moduleId: module.id,
  selector: 'courseclass-app',
  template: `<h1>{{title}}</h1>
              <courses></courses>
              <authors></authors>
              
              <!-- Property Binding -->
              <img src="{{imageUrl}}" />
              <img [src]="imageUrl" />
              <img bind-src="imageUrl" />
              `,
  directives: [CoursesComponent, AuthorsComponent]
})
export class CourseclassAppComponent {
  title = 'courseclass works!';
  imageUrl = "http://dummyimage.com/400x200/017/fff";
}
