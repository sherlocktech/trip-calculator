import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement, Predicate } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const dateField: Predicate<DebugElement> = By.css('#date-field');
  const costField: Predicate<DebugElement> = By.css('#cost-field');
  const savingsField: Predicate<DebugElement> = By.css('#savings-field');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
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

  it(`should get date input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const dateInput: HTMLInputElement = fixture.debugElement.query(dateField).query(By.css('input')).nativeElement;
    const val = (1).toString();

    setInputValue(dateInput, val);

    const monthsVal = component.trip.months.toString();
    expect(monthsVal).toBe(val);
  }));

  it(`should get cost input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const costInput: HTMLInputElement = fixture.debugElement.query(costField).query(By.css('input')).nativeElement;
    const val = (1000).toString();

    setInputValue(costInput, val);

    const costVal = component.trip.cost.toString();
    expect(costVal).toBe(val);
  }));

  it(`should get savings input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const savingsInput: HTMLInputElement = fixture.debugElement.query(savingsField).query(By.css('.form-control')).nativeElement;
    const val = (1000).toString();

    setInputValue(savingsInput, val);
    const savingsRateVal = component.trip.savingsRate.toString();
    expect(savingsRateVal).toBe(val);
  }));

  it(`should display 'Yes' when savings rate is adequate for cost, 'No' otherwise`, () => {
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('#submit')).nativeElement;
    component.trip.cost = 5000;
    component.trip.months = 5;
    component.trip.savingsRate = 1000;

    button.click();

    expect(component.result).toBe('Yes');
  });

  function setInputValue(inputElement: HTMLInputElement, value: string) {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
    tick();
  }
});
