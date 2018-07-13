import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ResultsComponent } from './results.component';
import { Result } from './../result';

describe('ResultsComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultsComponent,
        TestHostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should display positive results', () => {
    testHostComponent.setResults(true, -10, 20);
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('#result-field').innerText).toContain('Congrats!');
  });

  it('should display negative results', () => {
    testHostComponent.setResults(false, 10, 10);
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('#result-field').innerText).toContain('need to save more');
  });

  it('should display correct amount saved', () => {
    testHostComponent.setResults(false, 10, 10);
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('#result-field ul > li:first-child').innerText).toContain('$10.00');
  });

  it('should display correct savings difference', () => {
    testHostComponent.setResults(true, -10, 10);
    testHostFixture.detectChanges();

    expect(testHostFixture.nativeElement.querySelector('#result-field ul > li:nth-child(2)').innerText).toContain('$10.00');
  });

  @Component({
    selector: 'app-host-component',
    template: `<app-results [results]="result"></app-results>`
  })
  class TestHostComponent {
    result = new Result();

    setResults(savingsAdequate: boolean, savingsDiff: number, savingsForTrip: number) {
      this.result.savingsAdequate = savingsAdequate;
      this.result.savingsDiff = savingsDiff;
      this.result.savingsForTrip = savingsForTrip;
    }
  }
});
