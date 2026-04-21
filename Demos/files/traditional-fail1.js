const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Read error:', err)
    return;
  }
  console.log(data)
})

// Do something with the data - I dare you. (not as it executes this first)
  console.log(`Can't use "data" here as it doesn't exist`)

