// First problem
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Second problem
let n = 8;

for (let i = n; i <= 12; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i, "is a prime number");
  }
}

// third problem
let string =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cells = "";

for (const ch of string) {
  cells += ch;
  if (ch === ",") {
    continue;
  }
  if (ch === "\\n") {
    break;
  }
}

console.log(cells);
