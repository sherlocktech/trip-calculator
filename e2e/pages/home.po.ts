import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

import * as moment from 'moment';

export class HomePage extends AppPage {
  private readonly url = '/';
  private readonly dateField = element(by.css('#date-field'));
  private readonly costField = element(by.css('#cost-field'));
  private readonly savingsField = element(by.css('#savings-field'));
  private readonly resultField = element(by.css('#result-field'));

  navigateTo() {
    return super.navigateTo(this.url);
  }

  clickSubmit() {
    element(by.css('#submit')).click();
  }

  getNavBrand() {
    const nav = element(by.tagName('nav'));
    return nav.$('.navbar-brand').getText();
  }

  setDate(numOfMonths: number) {
    const date = moment().add(numOfMonths, 'months');
    this.dateField.$('input').click();
    this.dateField.$('input').sendKeys(date.format('YYYY[-]MM[-]DD'));
  }

  getDateInput() {
    return this.dateField.$('input').getAttribute('value');
  }

  getDateInputLabel() {
    return this.dateField.$('label').getText();
  }

  setTripCost(cost: number) {
    this.costField.$('input').click();
    this.costField.$('input').sendKeys(cost);
  }

  getTripCostInput() {
    return this.costField.$('input').getAttribute('value');
  }

  getTripCostTextBoxLabel() {
    return this.costField.$('label').getText();
  }

  setSavingsRate(savingsRate: number) {
    this.savingsField.$('input').click();
    this.savingsField.$('input').sendKeys(savingsRate);
  }

  getSavingsRateInput() {
    return this.savingsField.$('input').getAttribute('value');
  }

  getSavingsRateTextBoxLabel() {
    return this.savingsField.$('label').getText();
  }

  getResult() {
    return this.resultField.getText();
  }
}
