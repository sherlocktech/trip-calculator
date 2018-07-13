import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { DateAdapterService } from './date-adapter.service';
import { CalculatorService } from 'app/calculator.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [
    {provide: NgbDateAdapter, useClass: DateAdapterService},
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
