
// Pretend the data has been read from a database into a JavaScript array of objects
// We will do this later in the course

const priceList = [
  {
    'item': 'Laptop',
    'make': 'HP',
    'model': '250 G9 15.6 inch display',
    'price': 499.00
  },
  {
    'item': 'Laptop',
    'make': 'Dell',
    'model': 'Inspiron 14 7430',
    'price': 679.00
  },
  {
    'item': 'Scanner',
    'make': 'Canon',
    'model': 'Image formula R40',
    'price': 282.00
  },
  {
    'item': 'Phone',
    'make': 'Samsung',
    'model': 'Galaxy Z flip5',
    'price': 1149.00
  },
  
]

document.getElementById('cbStyleId').addEventListener('change', changeStyle)
document.getElementById('rbOpen').addEventListener('change', changeStatus)
document.getElementById('rbClosed').addEventListener('change', changeStatus)

// Dynamically create an html table from the array. Change a value and it will automatically
// Update the table of values
// This approach is fine but not as efficient and harder to debug, but simple and quick to write
function drawTable2() {
  let html = 
  `<table id="priceTableId">
     <thead>
       <tr>
         <th>Item</th>
         <th>Make</th>
         <th>Model</th>
         <th>Price</th>
       </tr>
     </thead>
     
     <tbody>`

  for (let i = 0; i < priceList.length; i++) {
    html +=
      `<tr>
         <td>${priceList[i].item}</td>
         <td>${priceList[i].make}</td>
         <td>${priceList[i].model}</td>
         <td>£${priceList[i].price}</td>
       </tr>
      `
  }
  html += `</tbody></table>`

  document.getElementById("priceListDiv").innerHTML = html
}

// This approach is more verbose but easier to debug as DOM objects are visible
// in the debugger and runs more efficiently for complex pages
// Build the table by adding children - no need for end tags
function drawTable() {
  const priceDivElem = document.getElementById("priceListDiv") // Parent element
  priceDivElem.replaceChildren() // Clear any existing content

  const tableElem = document.createElement('table') // Create table element
  tableElem.id = 'priceTableId' // Create an ID for the checkbox to access

  const theadElem = document.createElement('thead') // Create thead element
  const tbodyElem = document.createElement('tbody') // Create tbody element

  // Create the 4 header cols from the array  
  const headerRow = document.createElement('tr');     // Need a ; here as interpreter thinks next line is part of forEach
  ['Item', 'Make', 'Model', 'Price'].forEach(text => {
    const th = document.createElement('th')
    th.textContent = text
    headerRow.appendChild(th)
  })

  theadElem.appendChild(headerRow) // Add the header row to the thead element


  // Create a row and 4 columns and copy body data from the array of objects
  for (let i = 0; i < priceList.length; i++) {
    const trElem = document.createElement('tr')

    const tdItem = document.createElement('td')
    tdItem.textContent = priceList[i].item;

    const tdMake = document.createElement('td')
    tdMake.textContent = priceList[i].make;

    const tdModel = document.createElement('td')
    tdModel.textContent = priceList[i].model

    const tdPrice = document.createElement('td')
    tdPrice.textContent = `£${priceList[i].price}`

    trElem.append(tdItem, tdMake, tdModel, tdPrice) // Add the 4 columns to the row
    tbodyElem.append(trElem)                        // Add individual rows to the tbody
  }

  tableElem.append(theadElem, tbodyElem)  // All rows added to the thead and tbody so add both to the table
  priceDivElem.append(tableElem)   // Finally add the table to the div 
}


// Use the table id to locate the element then remove its class so no styling on it
// Or add the class so css can style it
function changeStyle() {
  const cbStyleElem = document.getElementById("cbStyleId")
  if (cbStyleElem.checked) {
    document.getElementById('priceTableId').setAttribute("class", "priceTable")
  } else {
    document.getElementById('priceTableId').removeAttribute("class", "priceTable")
  }
}

function changeStatus() {
  const checkedRadio = document.querySelector('input[name="rbShopStatus"]:checked') // query all the rbShopStatus and return the checked one
  if (checkedRadio.id === "rbOpen") {
    document.getElementById('title').textContent = "Store is open"
  } else {
    document.getElementById('title').textContent = "Store is closed"
  }
}

drawTable()