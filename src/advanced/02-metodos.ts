export class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
  printFormat(): string {
    return `Año: ${this.year} Mes: ${this.month} Dia: ${this.day}`
  }
  add(amount: number, type: "days" | "months" | "years") {
    type === "days" ? this.day += amount : ''
    type === "months" ? this.month += amount : ''
    type === "years" ? this.year += amount : ''
  }
}

const myDate = new MyDate(2016, 6, 12)
console.log(myDate.printFormat());

myDate.add(4, "years")
myDate.add(2, "months")
myDate.add(15, "days")
console.log(myDate.printFormat());

