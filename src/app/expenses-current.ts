import { Rate } from './rate-enum';

export class ExpensesCurrent {
  private _rent: number;
  private _utilities: number;
  private _food: number;
  private _fun: number;
  private _sum: number;

  constructor (
    rent: number,
    utilities: number,
    food: number,
    fun: number
    ) {
      this._rent = rent;
      this._utilities = utilities;
      this._food = food;
      this._fun = fun;
    }

  get rent(): number {
    return this._rent;
  }

  set rent(newRent: number) {
    this._rent = newRent;
  }

  get utilities(): number {
    return this._utilities;
  }

  set utilities(newUtilities: number) {
    this._utilities = newUtilities;
  }

  get food(): number {
    return this._food;
  }

  set food(newFood: number) {
    this._food = newFood;
  }

  get fun(): number {
    return this._fun;
  }

  set fun(newFun: number) {
    this._fun = newFun;
  }

  //possibly move all of this logic to calculator.service
  //not flexible, non of these values are optional
  get sum():number {
    this._sum = this._rent + this._utilities + this._food + this._fun;
    return this._sum;
  }
}
