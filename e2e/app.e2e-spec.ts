import { HomePage } from './pages/home.po';
import * as moment from 'moment';

// Christina has heard about a cool new app that will
// help her decide if she is saving enough for her upcoming
// trip.
describe('trip-calculator Homepage', () => {
  const page = new HomePage();

  // She goes to check out its homepage
  page.navigateTo();

  // She notices the page title
  it(`should have as title 'TripCalculator'`, () => {
    expect(page.getTitle()).toBe('TripCalculator');
  });

  // She notices the header mentions trip calculator
  it(`should have 'Trip Calculator' in nav`, () => {
    expect(page.getNavBrand()).toBe('Trip Calculator');
  });

  // She is invited to enter some trip information.
  // She notices a date input labeled "Months till trip"
  it(`should have date input labeled 'Trip date'`, () => {
    expect(page.getDateInputLabel()).toContain('Trip date');
  });

  // She notices a text box labeled "Trip cost"
  it(`should have text box labeled 'Trip cost'`, () => {
    expect(page.getTripCostTextBoxLabel()).toContain('Trip cost');
  });

  // She notices a text box labeled "Savings per month"
  it(`should have text box labeled 'Savings per month'`, () => {
    expect(page.getSavingsRateTextBoxLabel()).toContain('Savings per month');
  });

  // She notices a text box labeled "Current Savings"
  it(`should have text box labeled 'Current Savings'`, () => {
    expect(page.getBaseSavingsTextBoxLabel()).toContain('Current Savings');
  });

  // Christina is going to Mexico in a year, so she types
  // 12 for the number of months till her trip
  it(`should have date input one year from now`, () => {
    const numOfMonths = 12;
    const date = moment().add(numOfMonths, 'months');
    page.setDate(numOfMonths);
    expect(page.getDateInput()).toBe(date.format('YYYY[-]MM[-]DD'));
  });

  // She estimates the total cost of the trip will be around
  // $1,500. She enters "1500" in the trip cost text box
  it(`should have '1500' as input to trip cost input`, () => {
    const tripCost = 1500;
    page.setTripCost(tripCost);
    expect(page.getTripCostInput()).toBe(tripCost.toString());
  });

  // Christina is saving $200 towards her trip every month.
  // She inputs "200" in the savings rate text box
  it(`should have '200' as input to savings rate input`, () => {
    const savingsRate = 200;
    page.setSavingsRate(savingsRate);
    expect(page.getSavingsRateInput()).toBe(savingsRate.toString());
  });

  // Christina has already saved $100.
  // She inputs "100" in the current savings text box
  it(`should have '100' as input to savings rate input`, () => {
    const savings = 100;
    page.setBaseSavings(savings);
    expect(page.getBaseSavingsInput()).toBe(savings.toString());
  });

  // When she clicks Submit, the page updates and has "Yes" written
  // underneath her input
  it(`should display 'Congrats!'`, () => {
    page.clickSubmit();
    expect(page.getResult()).toContain('Congrats!');
  })
});

// Happy to know that she is saving enough, Christina shares
// the url with her friend Hannah who is also planning a trip.
// Hannah navigates to the home page to see if she is saving
// enough for her trip to Massachusetts in a couple months.
// She selects a date two months from now
/**
 * TEST GOES HERE
 */

// She estimates the total cost of the trip will be around
// $400. She enters "400" in the trip cost text box
/**
 * TEST GOES HERE
 */

// Hannah is only saving $150 per month. She enters "150" in
// the savings rate text box
/**
 * TEST GOES HERE
 */

// When she hits enter, the page updates and has "No" written
// underneath her input. Dissappointed to see she isn't saving
// enough, Hannah makes plans to adjust her savings rate.
