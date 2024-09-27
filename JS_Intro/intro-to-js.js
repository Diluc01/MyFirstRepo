// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

console.log(`The sum of the number is 50: ${isSum50}`);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(`The number is odd: ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isLessThan25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

console.log(`The numbers are less than 25: ${isLessThan25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

console.log(`The numbers are unique: ${isUnique}`);
// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isLessThan25 && isUnique;

// Finally, log the results.
console.log(`The results are valid: ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

const divisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;

console.log(`The numbers are divisible by 5: ${divisibleBy5}`);

const largerThanLast = n1 > n4;

console.log(
  `The first number is larger than the last number: ${largerThanLast}`
);

const arithmeticChain = n2 - n1;

console.log(
  `The result of subtracting the second by the first number is: ${arithmeticChain}`
);

const multiplyResult = arithmeticChain * n3;

console.log(`The result of the multiplication is: ${multiplyResult}`);

const findRemainder = multiplyResult % n4;

console.log(`The remainder of this operation is: ${findRemainder}`);

const totalDistanceInMiles = 1500;
const milesPerHour1 = 55;
const milesPerHour2 = 60;
const milesPerHour3 = 75;
const milesPerGallon1 = 30;
const milesPerGallon2 = 28;
const milesPerGallon3 = 23;
const budget = 175;
const costOfFuel = 3;

const formula1 = totalDistanceInMiles / milesPerGallon1;
const formula2 = totalDistanceInMiles / milesPerGallon2;
const formula3 = totalDistanceInMiles / milesPerGallon3;

console.log(
  `These are the different results for gallons of fuel: ${formula1}, ${formula2}, ${formula3}`
);

const multiplication1 = formula1 * costOfFuel;
const multiplication2 = formula2 * costOfFuel;
const multiplication3 = formula3 * costOfFuel;

console.log(
  `These are the different results for budget: ${multiplication1}, ${multiplication2}, ${multiplication3}`
);

const howLongWillItTake1 = totalDistanceInMiles / milesPerHour1;
const howLongWillItTake2 = totalDistanceInMiles / milesPerHour2;
const howLongWillItTake3 = totalDistanceInMiles / milesPerHour3;

console.log(
  `These are the different results for how many hours it will take: ${howLongWillItTake1}, ${howLongWillItTake2}, ${howLongWillItTake3}`
);
