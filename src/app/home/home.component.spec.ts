import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#date-field'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Months till trip');
  });

  it(`should display 'Trip cost' as label for cost field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#cost-field'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Trip cost');
  });

  it(`should display 'Savings per month' as label for savings field`, () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#savings-field'));
    const htmlElement: HTMLElement = debugElement.nativeElement;

    expect(htmlElement.textContent).toContain('Savings per month');
  })
});
