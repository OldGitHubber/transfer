const fs = require('fs');

// Read the file asynchronously as it may take some time

// READ using callback
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Read error:', err);
    return;
  }
  console.log('File contents:', data)

  console.log(`Need to do the rest of the program here\n`)

  // WRITE using callback in a callback
  fs.writeFile('output.txt', data.toUpperCase(), err => {
    if (err) {
      console.error('Write error:', err)
      return;
    }
    console.log('Write complete\n')
  })

  console.log(`And some more here if you want to`)
})

console.log(`Ok here as long as you don't need access to the data - it will be out of sync\n`)