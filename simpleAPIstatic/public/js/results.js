document.addEventListener('input', handleInputEvents)  // All input events - triggers on each char entered
document.addEventListener('change', handleInputEvents) // All change events - trigger on the dropdown selection

// Build the API URI
async function getResult(searchTxt, searchType) {

  let APIendPoint = 'http://localhost:3000/results/'

  const searchInput = document.getElementById("searchText");

  switch (searchType) {
    case 'lName':
      searchInput.disabled = false
      APIendPoint += `student/last-name/${searchTxt}`
      break

    case 'id':
      searchInput.disabled = false
      APIendPoint += `student/id/${searchTxt}`
      break

    case 'all':
      searchInput.disabled = true
      APIendPoint += searchType
      break
  }

  try {
    const payload = await fetch(APIendPoint) // .ok if any 2xx status code returned
    if (!payload.ok) {
      return []
    } else {
      const results = await payload.json() // Response is good so process
      return results
    }
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

function renderResult(result) {
  let outputElem = document.getElementById("displayResult")
  if (result.length != 0) {    // Array not empty so something found
    outputElem.innerHTML = ''

    for (let i = 0; i < result.length; i++) {
      outputElem.innerHTML += `Student ID: ${result[i].id}, ${result[i].fName} ${result[i].lName}, scored ${result[i].result}<br>`
    }
  }
  else
    outputElem.innerText = `Not found`
}


// Input and change events processes so we get an output when user changes input - e.g. deletes a char
async function handleInputEvents(event) {
  let attrib = event.target.getAttribute('id') // Get the id of where this came from
  switch (attrib) {
    case 'ddSearchType': document.getElementById("searchText").value = '' // Clear search if type is changed
    case 'searchText':
      const type = document.getElementById("ddSearchType").value

      try {
        renderResult(await getResult(event.target.value, type)); break // (entered value, search type)
      } catch (err) {
        console.log(err)
      }
  }
}

