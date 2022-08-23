export class Animal {
  constructor(
    protected animal: string,
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
    public apt: string,
    animal: string = "perro"
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

const scoobyDoo = new Dog("investigador")

scoobyDoo.move()
// scoobyDoo.animal = "conejo"
console.log(scoobyDoo.greeting())
console.log(scoobyDoo.say("Dame una scooby galleta"))
