const fs = require("fs")
const INFILE = 'input.txt'
const OUTFILE = 'out.txt'

try {
  const data = fs.readFileSync(INFILE, "utf8")
  console.log(data)

  fs.writeFileSync(OUTFILE, data.toUpperCase())
  console.log(`\n${OUTFILE} written successfully`)
} catch (err) {
  console.log(err.message)
}

console.log(`\nNow more sequential code in the right place`)
