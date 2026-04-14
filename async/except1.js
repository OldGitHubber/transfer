// This example shows how user defined exceptions can be thrown or, in the case of .trim for 999 a system type error
// is thrown but as we have a catch we can catch it without it killing the app as an unhandled exception
const numArr = ["      999     ", 999, "  9", "1000", "nine hundred and ninety nine"]

for (let i = 0; i < numArr.length; i++) {
  try {
    console.log(`\nTest val: ${numArr[i]}`)
    numArr[i].trim() // Array obj will throw an error itself
    if (isNaN(numArr[i])) throw "Not a number"

    let num = Number(numArr[i])

    if (num >= 1000) throw new Error("Too big") // Error object preferred

    if (num == 9)
      num /= 0         // Should be system divide by zero error but it's converted to infinity so not caught! 
    if (num == Infinity)
      num /= "zeeero"  // This is also acceptable. num is set to NaN rather than raising an exception. Odd. 

    console.log(`The number is: ${num}`)

  } catch (err) {
    console.log('App Error Str: ', err.message) // err output the whole object. err.msg for string
  } finally {
    console.log("This is executed regardless of success or failure if needed.")
  }
}
