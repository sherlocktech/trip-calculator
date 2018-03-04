import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

export class HomePage extends AppPage {
  private readonly url: string = '/';

  navigateTo() {
    return super.navigateTo(this.url);
  }

  getHeaderText() {
    return element(by.tagName('h1')).getText();
  }

  getDateInputLabelText() {
    return element(by.css('#date-field  label')).getText();
  }

  getTripCostTextBoxLabelText() {
    return element(by.css('#cost-field label')).getText();
  }

  getSavingsRateTextBoxLabelText() {
    return element(by.css('#savings-field label')).getText();
  }
}
