// Object with three functions. One adds values and places result in total
// One calculates the mean of the values and puts the result in average
// One prints the state of the object to the console
let numbers = {
  values: [1, 2, 3, 4, 5],
  total: 0,
  average: 0,
  sum() {
    this.total = 0;
    this.values.forEach((element) => this.total += element)
    return numbers // Returns the current state of the object to the caller
  },
  mean() {
    this.average = this.total / this.values.length
    return numbers // Returns the current state of the object to the caller
  },
  printObj() {
    console.log(`The sum and mean of ${this.values} are: ${this.total} and ${this.average}`)
  }
}

// Chaining
numbers.printObj()                // No members have calculated anything
numbers.sum().printObj()          // .sum evaluates to the object so its function can be called
numbers.sum().mean().printObj()   // .mean evaluates to the object so its function can be called

// Could be written like this
numbers
  .sum()
  .mean()
  .printObj()
