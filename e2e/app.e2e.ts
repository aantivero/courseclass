import { CourseclassPage } from './app.po';

describe('courseclass App', function() {
  let page: CourseclassPage;

  beforeEach(() => {
    page = new CourseclassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('courseclass works!');
  });
});
