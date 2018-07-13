import { browser, element, by } from 'protractor';

export class AppPage {

  navigateTo(url: string = '/') {
    return browser.get(url);
  }

  getTitle() {
    return browser.getTitle();
  }
}
