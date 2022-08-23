class Animal {
  constructor(
    public animal: string,
  ) { }

  move(): void {
    console.log("Moving along")
  }
  greeting(): string {
    return `Hola, soy un ${this.animal}`
  }
}

const donald = new Animal("pato")

donald.move()
console.log(donald.greeting())

class Dog extends Animal {
  constructor(
    animal: string,
    public apt: string,
  ) {
    super(animal)
  }
  greeting(): string {
    return `Hola soy un ${this.animal} ${this.apt}`
  }
  say(phrase: string): string {
    return phrase
  }
}

const scoobyDoo = new Dog("perro", "investigador")

scoobyDoo.move()
console.log(scoobyDoo.greeting())
console.log(scoobyDoo.say("Dame una scooby galleta"))
