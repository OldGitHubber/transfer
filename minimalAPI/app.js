const express = require('express')
const app = express()
const PORT = 3000

app.get('/', rootResponse)

app.listen(PORT, startServer)



// ------------- Functions -----------------
function rootResponse (req, res) {
  res.send('API working. How easy is that!')
}

function startServer () {
  console.log(`Server running at http://localhost:${PORT}`)
}
