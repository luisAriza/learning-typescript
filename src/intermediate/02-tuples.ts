const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "abc"]
prices.push(10)
prices.push("def")

console.log("prices", prices);

// Esto es una tupla, solamente puede tener esos 2 argumentos en ese orden y con esos tipos
let user: [string, number] = ["Luis", 25]
// user = []
// user = ["Manuel"]
user = ["Manuel", 30]
// user = ["Manuel", 30, "20"]

console.log("user", user);

// Con desestructuracion
const [username, age] = user

console.log("age", age);
console.log("username", username);
