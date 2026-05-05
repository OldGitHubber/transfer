const fs = require('fs').promises
const INFILE = 'input.txt'
const OUTFILE = './out/output.txt'

main()

async function main() {
  try {
    let data = await fs.readFile(INFILE, 'utf8')
    console.log(data)
    console.log(`More sequential code`)
    await fs.writeFile(OUTFILE, data.toUpperCase())
    console.log(`\n${OUTFILE} written successfully`)
    while(1){}  // Keep the container alive
  } catch (err) {
    console.log(err.message)
  }
}

console.log(`More sequential code here but it will be out of sync\n`)


