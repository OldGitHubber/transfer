// This is a line comment

/* This is a 
   block comment
   over multiple lines
*/

// Convention is to use camel case for variables like thisIsCamelCase
// Convention for constants is CAPITALS and snake case. THIS_IS_SNAKE_CASE

const NUM_DAYS_IN_WEEK = 7 // Indicates it is never intended to change and shouldn't change. Snake case
// NUM_DAYS_IN_WEEK = 6    // computer says no

// Declare and initialise variables
let x=3
let y=2.5
let z=x+y
let a, b, c  // a b and c are declared but not initialised so are undefined
// const d   // constant declared but must be initialised

let firstName='Jimmy' // camel case
let lastName='Smith'
console.log('Full name: ' + firstName + ' ' + lastName + ' and y=' + y)

console.log(`Full name: ${firstName} ${lastName} and y=${y}`)

console.log(`x is a ${typeof x}, c is a ${typeof c}, firstName is a ${typeof firstName}, a is a ${typeof a}`)
console.log(`A num divided by a string is not a number: ${x/firstName}`)


// Various operators
x++
y+=5
z*=y
console.log(`x=${x}, y=${y}, z=${z}`)

a=14
c=a/4
d=a%4
console.log(`c=${~~c} d=${d}`)

// Mod has many uses. e.g., check if a number is odd or even - i.e. exactly divisible by another number
let num = 3 // if num % 2 is 0 then it must be even as there is no remainder otherwise it's odd




