import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CourseclassAppComponent } from '../app/courseclass.component';

beforeEachProviders(() => [CourseclassAppComponent]);

describe('App: Courseclass', () => {
  it('should create the app',
      inject([CourseclassAppComponent], (app: CourseclassAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'courseclass works!\'',
      inject([CourseclassAppComponent], (app: CourseclassAppComponent) => {
    expect(app.title).toEqual('courseclass works!');
  }));
});
