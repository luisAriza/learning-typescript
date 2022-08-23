export class MyDate {
  year: number
  month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
  #addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`
    }

    return `${value}`
  }
  getDay(): number {
    return this.day
  }
  printFormat(): string {
    const day = this.#addPadding(this.day)
    const month = this.#addPadding(this.month)

    return `${this.year}/${month}/${day}`
  }
  add(amount: number, type: "days" | "months" | "years"): void {
    type === "days" ? this.day += amount : null
    type === "months" ? this.month += amount : null
    type === "years" ? this.year += amount : null
  }
}

const myDate = new MyDate(2016, 2, 9)
// myDate.day;
// myDate.#addPadding(12);

console.log(myDate.getDay());
console.log(myDate.printFormat());

