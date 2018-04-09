import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormStubComponent
      ],
      imports: [
        NgbModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeDefined();
  }));

  @Component({selector: 'app-form', template: ''})
  class FormStubComponent {}
});


