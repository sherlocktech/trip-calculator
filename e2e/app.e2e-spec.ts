import { TripCalculatorPage } from './app.po';

describe('trip-calculator App', () => {
  let page: TripCalculatorPage;

  beforeEach(() => {
    page = new TripCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
