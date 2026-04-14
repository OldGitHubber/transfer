
let url = 'https://official-joke-api.appspot.co/jokes/random'

// Fetch returns a promise. The promise.then is called and the value from the promise is passed as an argument
// .then executes and returns a promise from .json.  That promise .then function is called with the value returned
// from the resolved promise passed as an arg to what I've called jsonObj. The function runs to completion
// If an error occurs, we need to detect and handle it. Take m off random to create 404
// Take m off .com to create a catastrophic runtime error - app will crash without catch
fetch(url)
  .then(response => {
    console.log('Response object: ', response)
    if (!response.ok) throw new Error(response.status)
    return response.json()
  })
  .then(jsonObj => {
    console.log('JSON object: ', jsonObj)

    // Or output to the web page
    document.getElementById("setup").textContent = jsonObj.setup
    document.getElementById("punchline").textContent = jsonObj.punchline
  })
  .catch(err => {
    console.log(err)
    document.getElementById("setup").textContent = 'Error occurred. ' + err.stack // Send back what you want
  })

  console.log('Output some nonsense just to show the app thread is not blocked')