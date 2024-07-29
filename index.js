// Question 1

const printTemperature = ({location, temperature}) => {
  return `Location: ${location}, Temperature: ${temperature} degree celsius`
}

console.log(printTemperature({ location: "New York", temperature: 15 }));
console.log(printTemperature({ location: "London", temperature: 10 }));

// Question 2

const printFruit = ({fruitName, fruitColor, inStock}) => {
  return `Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, Available: ${inStock}`
}

console.log(printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true }));
console.log(printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false }));

// Question 3

const printStudentScores = ([str, ...scores]) => {
  return `Student: ${str}, Scores: ${scores}`
}

console.log(printStudentScores(["Alice", 90, 85, 95]));
console.log(printStudentScores(["Bob", 80, 75, 85]));

// Question 4

const printProductDetails = ({ name: laptopName, price: laptopPrice}) => {
  return `Product: ${laptopName}, Price: $${laptopPrice}`
}

console.log(printProductDetails({ name: "Laptop", price: 899 }));
console.log(printProductDetails({ name: "Phone", price: 599 }));

// Question 5

const printPersonDetails = ({ name: personName = "Anonymous", age: personAge = "Unknown"}) => {
   return `Name: ${personName}, Age: ${personAge}`
}

console.log(printPersonDetails({ name: "John", age: 30 }));
console.log(printPersonDetails({}));

// Question 6

const printCityPopulation = ([cityName, { population: cityPopulation, country: countryName}]) => {
   return `City: ${cityName}, Population: ${cityPopulation}, Country: ${countryName}`
}

console.log(printCityPopulation(["New York", { population: 8623000, country: "USA" }]));
console.log(printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }]));

// Question 7

const printCarDetails = ([carName, { model: modelName, price: carPrice }]) => {
  return `Name: ${carName}, Model: ${modelName}, Price: Rs.${carPrice}`
}

console.log(printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]));
console.log(printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]));