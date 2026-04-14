

function changePara1() {
  let element = document.getElementById('para1'); // Get access to the defined element
  let paraText = element.innerText;                   // Get whatever text is within the element
  paraText += ' And this is some text added from JavaScript.';
  element.innerText = paraText; // Output text into the defined element
}

function addLink() {
  let linkHtml = `<a href=https://google.com>Go to Google</a>`; // Link string
  let linkDiv = document.getElementById('addLink');         // Get access to the named div element
  linkDiv.innerHTML = linkHtml;                             // Copy to the div but interpret string as html
}