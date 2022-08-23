const date = new Date()
// Métodos de Date
date.getHours()
date.getTime()
date.toISOString()

console.log("date", date);

const date2 = new Date(1993, 11, 31)
// Métodos de Date
date2.getHours()
date2.getTime()
date2.toISOString()

console.log("date2", date2);

let myVar

class MyDate {
	year: number
	month: number
	day: number

	constructor(year: number, month: number, day: number) {
		this.year = year
		this.month = month
		this.day = day
	}
}

const myDate = new MyDate(2016, 6, 12)

console.log(myDate);
