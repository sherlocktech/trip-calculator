export class ExpensesOngoing {
  public phone: number;
  public loans?: number;

  constructor (
    phone: number,
    loans: number
  ) {
    this.phone = phone;
    this.loans = loans;
  }

  get total() {
    let sum = this.phone;
    if (this.loans !== null && this.loans !== undefined)
      sum += this.loans;
    return sum;
  }
}
