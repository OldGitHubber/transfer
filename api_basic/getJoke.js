// If an error occurs, we need to detect and handle it. Take m off random to create 404
// Take m off .com to create a catastrophic runtime error - app will crash without catch
// Add try catch
// With no try catch, the whole app is wrapped in one and reported unrecoverably in console
async function getJoke() {
  let url = 'https://official-joke-api.appspot.co/jokes/random'
  // let url = 'https://f1api.dev/api/current/drivers-championship'
  try {
    let response = await fetch(url) // Response 404 is not a runtime error
    //    console.log('Response object: ', response)
    if (!response.ok) throw new Error(response.status)
    let jsonObj = await response.json()
    //   console.log('JSON object: ', jsonObj)

    // Or output to the web page
    document.getElementById("setup").textContent = jsonObj.setup
    document.getElementById("punchline").textContent = jsonObj.punchline


    // document.getElementById("setup").textContent = jsonObj.drivers_championship[0].driver.name
    // document.getElementById("punchline").textContent = jsonObj.drivers_championship[0].driver.surname
    // document.getElementById("team").textContent = jsonObj.drivers_championship[0].team.teamId

  } catch (error) {     // Ok to catch here as error will jump straight here over other code
    console.log("Error returned by server is:", error)  // Could display a message: Site unavailable or url incorrect or whatever
    //   document.getElementById("error").textContent = "Our service is experiencing a problem. Please try again later." // Send back what you want
  }

  console.log('Code carries on after catch as not terminal.')
}


getJoke()
console.log('Output some nonsense just to show the app thread is not blocked')