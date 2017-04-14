export class ExpensesTrip {
  public flight: number;
  public lodging: number;
  public food: number;
  public activities: number;
  public fees?: number;

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
