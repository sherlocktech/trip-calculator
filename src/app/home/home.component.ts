import { Component, OnInit } from '@angular/core';
import { Trip } from 'app/trip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Trip Calculator';
  result: string;
  trip = new Trip();

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

  onSubmit() {
    if (this.trip.savings >= this.trip.cost) {
      this.result = 'Yes';
    } else {
      this.result = 'No';
    }
  }
}
