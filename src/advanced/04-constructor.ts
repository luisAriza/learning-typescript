export class MyDate {
  constructor(
    public year: number = 1997,
    private month: number = 5,
    private day: number = 1
  ) { }

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

const myDate = new MyDate()
console.log(myDate.printFormat());

const myDate2 = new MyDate(2010)
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2016, 7)
console.log(myDate3.printFormat());

const myDate4 = new MyDate(2022, 2, 12)
console.log(myDate4.printFormat());
