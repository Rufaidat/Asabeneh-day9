// level 1
const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
];

// que 3
countries.forEach((print) => console.log(print));

// que 4
console.log("\n");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((print) => console.log(print));

// que 5
console.log("\n");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((print) => console.log(print));

// que 6
console.log("\n");
let countryArr = countries.map((upper) => upper.toUpperCase());
console.log(countryArr);

// que 7
console.log("\n");
let countryLength = countries.map((upper) => upper.length);
console.log(countryLength);

// que 8
console.log("\n");
let square = numbers.map((square) => Math.pow(square, 2));
console.log(square);

// que 9
console.log("\n");
let upperName = names.map((upper) => upper.toUpperCase());
console.log(upperName);

// que 10
console.log("\n");
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
let productMap = products.map((map) => map);
console.log(productMap);

// que 11
console.log("\n");
let land = countries.filter((land) => land.includes("land"));
console.log(land);

// que 12
console.log("\n");
let country6 = countries.filter((country) => country.length === 6);
console.log(country6);

// que 13
console.log("\n");
let country6AndMore = countries.filter((country) => country.length >= 6);
console.log(country6AndMore);

// que 14
console.log("\n");
let countryStartWithE = countries.filter((country) => country.startsWith("E"));
console.log(countryStartWithE);

// que 15
let prices = products.filter((prices) => prices.price != "");
console.log(prices);
// que 16
console.log("\n");
let string = [4, 5, "n", "b", "c", true, null, undefined];
let getStringLists = string.filter((string) => typeof string === "string");
console.log(getStringLists);

// que 17
console.log("\n");
let sum = numbers.reduce((sum, num) => (sum += num), 0);
console.log(sum);

// que 18
console.log("\n");

// que 19
console.log("\n");
console.log(
  `just as the name suggests some is used to test if
a number of the arguments fulfills a condition 
whilst every is used to check if all the elements passes a test`
);

// que 20
console.log("\n");
let some = names.some((elem) => elem.length > 7);
console.log(some);
// que 21
console.log("\n");
let every = names.every((elem) => elem.includes("land"));
console.log(every);
// que 22
console.log("\n");
console.log(`find returns the value which satisfy a condition while
findIndex return the index of the element which satisfy the condition`);

// que 23
console.log("\n");
let find = countries.find((find) => find.length === 6);
console.log(find);

// que 24
console.log("\n");
let findIndex6 = countries.findIndex((six) => six.length === 6);
console.log(findIndex6);

// que 25
console.log("\n");
let findIndexNorway = countries.findIndex((index) => index === "Norway");
console.log(findIndexNorway);
// que 26
console.log("\n");
let findIndexRussia = countries.findIndex((index) => index === "Russia");
console.log(findIndexRussia);

//level 2
// que 1
console.log("\n");
let totalProductsPrice = products
  .map((prices) => prices["price"])
  .filter((prices) => typeof prices === "number")
  .reduce((sum, num) => (sum += num));
console.log(totalProductsPrice);

// que 2 NOT SOLVED
let reduceSum = products.reduce((sum, num, index) => {
  if (typeof num === "number") {
    sum += num;
  }
  return sum;
});
console.log(reduceSum);
console.log("\n");

// que 3
console.log("\n");
function categorizeCountries() {
  let groups = [];
  let land = [];
  let ia = [];
  let island = [];
  let stan = [];
  groups.push(land, ia, island, stan);
  for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) land.push(countries[i]);
    else if (countries[i].includes("ia")) ia.push(countries[i]);
    else if (countries[i].includes("island")) island.push(countries[i]);
    else if (countries[i].includes("stan")) stan.push(countries[i]);
  }
  return groups;
}
console.log(categorizeCountries());

//que 5
let getFirstTenCountries = countries.filter(
  (item) => countries.indexOf(item) < 10
);
console.log(getFirstTenCountries);

//que 6
let getLastTenCountries = countries.filter(
  (item) => countries.indexOf(item) > countries.length - 11
);
console.log(getLastTenCountries);

//level 3
// //que 2
// function mostSpoken(num, countries = countries) {
//   let sort = countries.sort((a, b) => {
//     return a - b;
//   });
//   console.log(sort);
// }
// mostSpoken();
