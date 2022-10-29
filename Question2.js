/* 
    Language: JavaScript(Node.js)
    input: order in a single line seperate by ", " eg 
        2 latte with cream, 1 expresso with cream, 1 cappuccino with cream, 1 latte with latte
    output: detailed bill with total eg.
        2 latte with cream => 250
        1 expresso with cream => 75
        1 cappuccino with cream => 90
        1 latte with latte => 150
        Total => 565
*/

class Coffee {
  constructor(milk, cream, latte) {
    (this.latte = latte), (this.cream = cream), (this.milk = milk);
    if (new.target === Coffee) {
      throw new Error("Abstract class cannot be instantiated");
    }
  }
  printBill(adon, quantity) {
    return this[adon] * quantity;
  }
}

class Expresso extends Coffee {
  constructor(milk, cream, latte) {
    super(milk, cream, latte);
  }
}

class Latte extends Coffee {
  constructor(milk, cream, latte) {
    super(milk, cream, latte);
  }
}

class Cappuccino extends Coffee {
  constructor(milk, cream, latte) {
    super(milk, cream, latte);
  }
}

const latte = new Latte(100, 125, 150);
const cappuccino = new Cappuccino(80, 90, 125);
const expresso = new Expresso(60, 75, 100);

function totalBill(arr) {
  let total = 0;
  for (const item of arr) {
    switch (item[1]) {
      case "latte":
        console.log(
          `${item.join(" ")} => ${latte.printBill(
            item[3],
            parseInt(item[0], 10)
          )}`
        );
        total += latte.printBill(item[3], parseInt(item[0], 10));
        break;
      case "cappuccino":
        console.log(
          `${item.join(" ")} => ${cappuccino.printBill(
            item[3],
            parseInt(item[0], 10)
          )}`
        );
        total += cappuccino.printBill(item[3], parseInt(item[0], 10));
        break;
      case "expresso":
        console.log(
          `${item.join(" ")} => ${expresso.printBill(
            item[3],
            parseInt(item[0], 10)
          )}`
        );
        total += expresso.printBill(item[3], parseInt(item[0], 10));
        break;
      default:
        console.log(`${item.join(" ")}   Sorry, this order is not available.`);
        break;
    }
  }
  console.log(`Total => ${total}`);
}

const readline = require("readline").createInterface(
  process.stdin,
  process.stdout
);

console.log(
  "Menu:\nCoffee => Expresso, Cappuccino, Latte\nAdd-ons => Milk, Cream, Latte"
);

let order = [];

readline.question("Enter your order: \n", (input) => {
  let arr = input
    .replace(/\s+$/g, "")
    .split(", ")
    .map((item) => item.replace(/\s+$/g, "").split(" "));
  order.push(...arr);
  console.log("\n\n");
  totalBill(order);
  readline.close();
});
