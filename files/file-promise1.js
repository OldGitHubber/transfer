const fs = require('fs')
const INFILE = 'input.txt'
const OUTFILE = 'out.txt'

main()

async function main() {
  try {
    let data = await readFile(INFILE, 'utf8')
    console.log(data)
    console.log(`More sequential code`)
    await writeFile(OUTFILE, data.toUpperCase())
    console.log(`\n${OUTFILE} written successfully`)
  } catch (err) {
    console.log(err.message)
  }
}

console.log(`More sequential code here but it will be out of sync\n`)





// ============= Functions =================
function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('output.txt', data, err => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}