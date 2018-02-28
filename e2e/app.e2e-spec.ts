import { HomePage } from './pages/home.po';

// Christina has heard about a cool new app that will
// help her decide if she is saving enough for her upcoming
// trip.
describe('trip-calculator Homepage', () => {
  const page = new HomePage();

  // She goes to check out its homepage
  page.navigateTo();

  // She notices the page title
  it(`should have as title 'TripCalculator'`, () => {
    expect(page.getTitle()).toEqual('TripCalculator');
  });

  // She notices the header mentions trip calculator
  it(`should have as header 'Trip Calculator'`, () => {
    expect(page.getHeader()).toContain('Trip Calculator');
  });
});

// She is invited to enter some trip information.
// She notices a date input labelled "Trip date"
/**
 * TEST GOES HERE
 */

// She notices a text box labelled "Trip cost"
/**
 * TEST GOES HERE
 */

// She notices a text box labelled "Savings rate"
/**
 * TEST GOES HERE
 */

// Christina is going to Mexico in a year, so she selects
// a date one year from now for the trip date
/**
 * TEST GOES HERE
 */

// She estimates the total cost of the trip will be around
// $1,500. She enters "1500" in the trip cost text box
/**
 * TEST GOES HERE
 */

// Christina is saving $200 towards her trip every month.
// She inputs "200" in the savings rate text box
/**
 * TEST GOES HERE
 */

// When she hits enter, the page updates and has "Yes" written
// underneath her input
/**
 * TEST GOES HERE
 */

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
