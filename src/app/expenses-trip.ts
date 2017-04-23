export class ExpensesTrip {
  public flight: number;
  public lodging: number;
  public food: number;
  public activities: number;
  public fees?: number;

  public flightDate: number;

  constructor (
    flight: number,
    lodging: number,
    food: number,
    activities: number
    ) {
      this.flight = flight;
      this.lodging = lodging;
      this.food = food;
      this.activities = activities;
    }

  //possibly move all of this logic to calculator.service
  get total() {
    let sum = 0;
    sum += this.flight + this.lodging + this.food + this.activities;
    if (this.fees !== null && this.fees !== undefined) {
      sum += this.fees;
    }
    return sum;
  }
}
