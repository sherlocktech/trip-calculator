export class ExpensesTrip {
  constructor (
    public flight: number,
    public lodging: number,
    public food: number,
    public activities: number,
    public fees?: number
  ) {}
}
