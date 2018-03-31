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
}
