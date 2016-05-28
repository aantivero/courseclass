export class CourseclassPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('courseclass-app h1')).getText();
  }
}
