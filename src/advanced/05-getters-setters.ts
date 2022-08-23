export class MyDate {
  constructor(
    public year: number = 1997,
    private _month: number = 5,
    private _day: number = 1
  ) { }

  #addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`
    }

    return `${value}`
  }
  printFormat(): string {
    const day = this.#addPadding(this._day)
    const month = this.#addPadding(this._month)

    return `${this.year}/${month}/${day}`
  }
  add(amount: number, type: "days" | "months" | "years"): void {
    type === "days" ? this._day += amount : null
    type === "months" ? this._month += amount : null
    type === "years" ? this.year += amount : null
  }
  get day(): number {
    return this._day
  }
  get month(): number {
    return this._month
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return false;
    if (this.year % 100 === 0) return true;

    return this.year % 4 === 0;
  }
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      throw new Error("Invalid month number")
    }
  }
}

const myDate = new MyDate(2020)

console.log(myDate.printFormat());

console.log(myDate.day);
myDate.month = 12;
console.log(myDate.month);
myDate.month = 13;
console.log(myDate.month);


