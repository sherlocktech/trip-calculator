import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

export class HomePage extends AppPage {

  navigateTo() {
    return super.navigateTo();
  }

  getHeader() {
    return element(by.css('h1')).getText();
  }
}
