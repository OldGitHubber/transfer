const express = require('express')
const app = express()
const PORT = 3000

//app.use(middleFn)
app.use('/whatever', middleFn)

// Define a simple route
app.get('/', (req, res) => {
  console.log(`In default route`)
  res.send('In default route')
})



app.get('/whatever', (req, res) => {
  console.log(`In whatever route`)
  res.send('Visited whatever route')
})



// Catch all for any routes not defined - must be last route - i.e. end of the stack
app.use((req, res) => {
  res.status(404).send(`Route not found`)
})

// =================================== End of routes =====================================================



// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

// ========================================================================================
// Named middleware functions 
// ========================================================================================

function middleFn(req, res, next) {
  console.log(`Just visited middleFn`)
  console.log(`Target endpoint is: ${req.method}  ${req.originalUrl}`)
  req.tony = 'I added this attribute just for a demo to show you can'
  res.setHeader(`tony-header`,`Tony was here`)
//  res.send(`Response from the middleFn`)
 
 // return
  next() // pass control to the next middleware or route handler
}

