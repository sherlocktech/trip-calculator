import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DebugElement, Predicate } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatCardModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const dateField: Predicate<DebugElement> = By.css('#date-field');
  const costField: Predicate<DebugElement> = By.css('#cost-field');
  const savingsField: Predicate<DebugElement> = By.css('#savings-field');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display 'Months till trip' as label for date field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(dateField);
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Months till trip');
  });

  it(`should display 'Trip cost' as label for cost field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(costField);
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Trip cost');
  });

  it(`should display 'Savings per month' as label for savings field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(savingsField);
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Savings per month');
  });

  it(`should get date input from user`, async(() => {
    const dateInput: HTMLInputElement = fixture.debugElement.query(dateField).query(By.css('input')).nativeElement;
    const val = (1).toString();

    setInputValue(dateInput, val).then(() => {
      const monthsVal = component.trip.months.toString();
      expect(monthsVal).toBe(val);
    })
  }));

  it(`should get cost input from user`, async(() => {
    const costInput: HTMLInputElement = fixture.debugElement.query(costField).query(By.css('input')).nativeElement;
    const val = (1000).toString();

    setInputValue(costInput, val).then(() => {
      const costVal = component.trip.cost.toString();
      expect(costVal).toBe(val);
    })
  }));

  it(`should get savings input from user`, async(() => {
    const savingsInput: HTMLInputElement = fixture.debugElement.query(savingsField).query(By.css('input')).nativeElement;
    const val = (1000).toString();

    setInputValue(savingsInput, val).then(() => {
      const savingsRateVal = component.trip.savingsRate.toString();
      expect(savingsRateVal).toBe(val);
    })
  }));

  it(`should calculate correct savings`, async(() => {
    const dateInput: HTMLInputElement = fixture.debugElement.query(dateField).query(By.css('input')).nativeElement;
    const savingsRateInput: HTMLInputElement = fixture.debugElement.query(savingsField).query(By.css('input')).nativeElement;
    const dateVal = 4;
    const savingsRateVal = 200;
    const expected = 4 * 200;

    setInputValue(dateInput, dateVal.toString());
    setInputValue(savingsRateInput, savingsRateVal.toString()).then(() => {
      const savings = component.trip.savings;
      expect(savings).toBe(expected);
    })
  }));

  function setInputValue(inputElement: HTMLInputElement, value: string) {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
    return fixture.whenStable();
  }
});
