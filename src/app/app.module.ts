import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { DateAdapterService } from './date-adapter.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: NgbDateAdapter, useClass: DateAdapterService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
