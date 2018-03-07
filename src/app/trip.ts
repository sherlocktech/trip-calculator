export class Trip {
  months: number;
  cost: number;
  savingsRate: number;
  private _savings: number;

  get savings(): number {
    const m = isNaN(this.months) ? 0 : this.months;
    const sr = isNaN(this.savingsRate) ? 0 : this.savingsRate;
    return m * sr;
  }
}
