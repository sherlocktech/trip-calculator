import { Component, OnInit } from '@angular/core';
import { Trip } from 'app/trip';
import { Result } from 'app/result';
import { CalculatorService } from 'app/calculator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  result = new Result();
  trip = new Trip();

  submitted = false;

  constructor(private calc: CalculatorService) { }

  onSubmit() {
    this.submitted = true;
    this.result = this.calc.calculateResults(this.trip);
  }
}
