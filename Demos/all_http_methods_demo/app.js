// Node Express can also serve up static files
const express = require('express');
const app = express();
const path = require('path'); // Used for concatenation to create a path

const PORT = 3000

// Point to static pages
app.use(express.static(path.join(__dirname, '/public/html'))); // Client requests files relative to here - i.e. no path needed
app.use(express.static(path.join(__dirname, '/public/img')));   // e.g. in index.html, <img src="http://localhost:3000/peace.jpg"> 
app.use(express.static(path.join(__dirname, '/public/css')));

// Express does no body parsing unless we include it - it uses the Content-Type header to use it or not
app.use(express.urlencoded({extended : true })); // Detect url encoded data in http and add to req body
app.use(express.json()); // Detect json data and put it into the req.body

// Params sent as a query string in get
app.get('/books', (req, res) => {
  let author = req.query.author;
  let title = req.query.title;
  res.send(`Here is ${title} by ${author}. Enjoy.`);
})



// GET is nice and easy. POST as a bit more to it: 
// need express.urlencoded for url encoded data and 
// express.json to recognise and decode json
// Use x-www-form-urlencoded or json in postman { "fName": "Tony", "lName":"Nicol", "age": 20 }
app.post('/person', (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let age = req.body.age;
  let ageStr = '';

  if (age >= 67) ageStr = 'ancient!';
  else
    ageStr = 'up and coming';

  res.type("text/plain").send(`${firstName} ${lastName} is ${ageStr}`);

})

app.delete('/person', (req, res)=> {
  res.send(`User ${req.body.userId}, Tony Nicol has been permanently deleted`);
})

app.put('/person', (req, res)=> {
  let oldName = req.body.curName;
  let newName = req.body.newName;
  let userId = req.body.userId;
  res.type("text/plain").send(`User ${req.body.userId}, ${oldName} has been updated to ${newName} and all other record attributes deleted`);
})

app.patch('/person', (req, res)=> {
  let oldName = req.body.curName;
  let newName = req.body.newName;
  let userId = req.body.userId;
  res.type("text/plain").send(`User ${req.body.userId}, ${oldName} has been updated to ${newName} and all other record attributes unchanged`);
})

// Say we had a page called home.html but we've changed it to index.html, we can redirect
// return 301 to browser: moved permanently. Browser will call new page
// Need to call from browser to see this
app.get('/home.html', (req,res)=>{
  res.redirect(301, '/index.html'); 
});

// If you reach here then non of the files or paths have been matched
app.use('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html', '404.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));