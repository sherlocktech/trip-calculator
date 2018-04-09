import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement, Predicate, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';

import { FormComponent } from './form.component';
import { CalculatorService } from 'app/calculator.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let calculatorServiceSpy: jasmine.SpyObj<CalculatorService>;

  const dateField: Predicate<DebugElement> = By.css('#date-field');
  const costField: Predicate<DebugElement> = By.css('#cost-field');
  const savingsField: Predicate<DebugElement> = By.css('#savings-field');
  const baseSavingsField: Predicate<DebugElement> = By.css('#base-savings-field');

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CalculatorService', ['calculateResults'])

    TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        ResultsStubComponent
      ],
      imports: [
        FormsModule,
        NgbDatepickerModule.forRoot()
      ],
      providers: [{ provide: CalculatorService, useValue: spy }]
    })
    .compileComponents();

    calculatorServiceSpy = TestBed.get(CalculatorService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display 'Trip date' as label for date field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(dateField).query(By.css('label'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toBe('Trip date');
  });

  it(`should display 'Trip cost' as label for cost field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(costField).query(By.css('label'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toBe('Trip cost');
  });

  it(`should display 'Savings per month' as label for savings rate field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(savingsField).query(By.css('label'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toBe('Savings per month');
  });

  it(`should display 'Current Savings' as label for savings field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(baseSavingsField).query(By.css('label'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toBe('Current Savings');
  });

  it(`should get cost input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const costInput: HTMLInputElement = fixture.debugElement.query(costField).query(By.css('input')).nativeElement;
    const val = (1000).toString();

    setInputValue(costInput, val);

    const costVal = component.trip.cost.toString();
    expect(costVal).toBe(val);
  }));

  it(`should get savings rate input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const savingsInput: HTMLInputElement = fixture.debugElement.query(savingsField).query(By.css('.form-control')).nativeElement;
    const val = (1000).toString();

    setInputValue(savingsInput, val);
    const savingsRateVal = component.trip.savingsRate.toString();
    expect(savingsRateVal).toBe(val);
  }));

  it(`should get current savings input from user`, fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const savingsInput: HTMLInputElement = fixture.debugElement.query(baseSavingsField).query(By.css('.form-control')).nativeElement;
    const val = (1000).toString();

    setInputValue(savingsInput, val);
    const baseSavingsVal = component.trip.baseSavings.toString();
    expect(baseSavingsVal).toBe(val);
  }));

  function setInputValue(inputElement: HTMLInputElement, value: string) {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
    tick();
  }

  @Component({selector: 'app-results', template: ''})
  class ResultsStubComponent {
    @Input()results: any;
  }
});


