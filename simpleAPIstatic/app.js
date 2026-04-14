const express = require('express')
const app = express()
const PORT = 3000
const results = require('./data/results.json') // Include some data to emulate a database
const path = require('path') // Used for concatenation to create a path
// Point to static pages. Just use one if all files are in the same place but as code gets more complex, need to structure the folders
app.use(express.static(path.join(__dirname, '/public/html')))  // Client requests files relative to here - i.e. no path needed
app.use(express.static(path.join(__dirname, '/public/css')))
app.use(express.static(path.join(__dirname, '/public/js')))


// get some data from an object file based on the query string: /results/student?lName=whatever
app.get("/results/student/last-name/:lName", (req, res) => {
  let score = []
  let lName = req.params.lName.toLowerCase()
  if (lName == undefined) return res.sendStatus(404) // not found

  score = results.filter(name => name.lName.toLowerCase() === lName)

  if (score.length == 0) return res.sendStatus(404) // not found
  else
    res.json(score)
})


// get some data from an object file based on the student ID param
// e.g. /results/student/5
app.get("/results/student/id/:id", (req, res) => {
  let score = []
  const idStr = req.params.id;

  if (idStr === undefined) {
    return res.status(400).send("Missing ID");
  }

  const idNum = Number(idStr);

  if (Number.isNaN(idNum)) {
    return res.status(400).send("ID must be numeric");
  }

  score = results.filter(element => element.id === idNum)
  if (score.length == 0) return res.sendStatus(404) // not found
  else
    res.json(score) // This is just a string so not using res.json
})

// Get all results
app.get("/results/all", (req, res) => {
  res.json(results)
})


// You can provide a catch-all to respond with your response rather 
// than node's standard response which is an html file.
// If it makes it here then a page, middleware or route hasn't been found.
app.use((req, res, next) => {
  res.sendStatus(404)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

