import { Component, Input } from '@angular/core';
import { Result } from 'app/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() results: Result;
  constructor() { }

}
