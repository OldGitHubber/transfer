let firstName = 'Tim'
console.log(`String length: ${firstName.length}`)

let str = 'This is A longer string to illustrate Some stuff'

console.log(`Char at position 3: ${str.charAt(13)}`)
console.log(`Char code at position 3: ${str.charCodeAt(8)}`)
console.log(`str ends with "stuff": ${str.endsWith('Some stuff', str.length)}`)
console.log(`str includes "longer string": ${str.includes('longer string')}`)
console.log(`All upper: ${str.toUpperCase()}`)
console.log(`All lower: ${str.toLowerCase()}`)


let parsed = str.split(' ')   // Split string into an array at each space. Can use regex

// output array
for (let i = 0; i < parsed.length; i++) {
  console.log(parsed[i])
}



