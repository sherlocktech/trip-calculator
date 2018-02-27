import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }             from './app.component';
import { CalculatorFormComponent }  from './calculator-form.component';      

import { CalculatorService } from './calculator.service';
import { SummaryComponent } from "app/summary.component";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
