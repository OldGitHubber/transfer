
// A switch statement is used for selection of multiple outcomes avoiding nested if else blocks
// Will switch on anything.
// If condition is a string then it will look for a match on that
// Math.random() creates a number 0 <= x < 1

let dayNum = Math.floor(Math.random() * 7) + 1 // Generate 1 to 7

switch (dayNum) {
  case 1: console.log(`Sunday`); break
  case 2: console.log(`Monday`); break
  case 3: console.log(`Tuesday`); break
  case 4: console.log(`Wednesday`); break
  case 5: console.log(`Thursday`); break
  case 6: console.log(`Friday`); break
  case 7: console.log(`Saturday`); break
}
