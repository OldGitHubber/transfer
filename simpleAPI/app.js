// Illustrates path parameter, query parameter and response codes
// Used named functions as I want to reference them on a diagram

const express = require('express')
const app = express()
let results = require('./results.json') // Include some data to emulate a database
const PORT = 3000

// Middleware to parse JSON as we want to send JSON in a POST. This will create req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Basic get
app.get('/', rootPath)
app.get('/results', allResults)           // call with /results to get all results
app.post('/results', addStudent)         // Call with POST /results body something like { "id": 20, "fName": "Tony", "lName": "Nicol", "score": 39 }
app.get('/results/name', resultsByName)   // Call with: /results/name?lName=whatever e.g. Jet
app.get('/results/:id', resultsById)      // Call using: /results/3 (or whatever)
app.delete('/results/:id', delResultById) // Call using: /results/3 (or whatever)
app.patch('/results/:id/:newName', changeName)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


// ---------- Named functions ------------------
function rootPath(req, res) {
  res.send('Root path of student results.')
}

function allResults(req, res) {
  res.json(results) // res.send is ok but it has to work out it's json, 
  // it calls stringify and maybe set Content-Type header to application/json
}

function resultsByName(req, res) {
  let lName = req.query.lName
  if (!lName) return res.sendStatus(400) // bad request if no name provided

  let score = results.filter(element => element.lName.toLowerCase() === lName.toLowerCase()) // case insensitive
  if (score.length === 0) return res.sendStatus(404) // not found
  else
    return res.json(score) // return an array of results (could be more than one)
}

function resultsById(req, res) {
  let id = parseInt(req.params.id) // params are always strings so convert to int
  if (isNaN(id)) return res.sendStatus(400) // bad request if not a number 
  let score = results.find(element => element.id === id) // find returns the object or undefined
  if (!score) return res.sendStatus(404) // not found
  else
    return res.json(score)  // return the object
}

// If using JSON, test with something like:
/*
{
  "id": 20,
  "fName": "Tony",
  "lName": "Nicol",
  "score": 39
}
*/
function addStudent(req, res) {
  const newStudent = req.body
  if (!newStudent.id || !newStudent.fName || !newStudent.lName || !newStudent.score) {
    return res.sendStatus(400) // Bad request if missing fields
  } else
    newStudent.id = parseInt(newStudent.id)
    results.push(newStudent) // Add to "database"
  return res.sendStatus(201) // Created
}

function delResultById(req, res) {
  const id = parseInt(req.params.id)
  const initialLength = results.length

  // Create new array with student with matching id not in it
  const results = results.filter(student => student.id !== id)

  // If array is still the same length then nothing has been deleted
  if (results.length === initialLength) {
    return res.status(404).send(`Student with ID ${id} not found`)
  }

  // Note: should be using 204 but message will not be sent so using 202 for demo
  return res.status(202).send(`Student with ID ${id} deleted`)
}

function changeName(req, res) {
  const newName = req.params.newName
  const id = parseInt(req.params.id)
  const index = results.findIndex(elem => elem.id === id) // -1 if not found
  if (index !== -1) {
    results[index].lName = newName
    res.sendStatus(204) // Updated. Returning nothing
  } else {
    res.send(404) // Not found
  }

}