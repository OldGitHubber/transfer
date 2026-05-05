const fs = require('fs');

// Read the file asynchronously as it may take some time

// READ using callback
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Read error:', err);
    return;
  }

  console.log('File contents:', data)

})

console.log(`Try to do the rest of the program here but you won't be using data you read`)

// WRITE using callback
// This won't work either as data is out of scope
fs.writeFile('output.txt', data.toUpperCase(), err => {
  if (err) {
    console.error('Write error:', err)
    return;
  }
  console.log('Write complete')
})
