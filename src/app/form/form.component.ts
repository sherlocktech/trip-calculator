import { Component, OnInit } from '@angular/core';
import { Trip } from 'app/trip';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  result: string;
  trip = new Trip();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.trip.savings >= this.trip.cost) {
      this.result = 'Yes';
    } else {
      this.result = 'No';
    }
  }

  // TODO: Remove this
  get diagnostic() { return JSON.stringify(this.trip); }

  onCostInput(cost: string) {
    const c = parseFloat(cost);
    this.trip.cost = isNaN(c) ? 0 : c;
  }

  onDateInput(date: string) {
    const d = parseFloat(date);
    this.trip.months = isNaN(d) ? 0 : d;
  }

  onSavingsRateInput(savingsRate: string) {
    const sr = parseFloat(savingsRate);
    this.trip.savingsRate = isNaN(sr) ? 0 : sr;
  }
}
