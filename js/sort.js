import { names } from './names.js'

let SortedNamesArray = Object.keys(names).sort()
const displayDiv = document.getElementById('List')

function display(n) {
    const br = document.createElement("br");

    let currentName = document.createTextNode(SortedNamesArray[n])
    let currentDescription = document.createTextNode(names[SortedNamesArray[n]])

    displayDiv.appendChild(currentName)
    displayDiv.appendChild(br)
    displayDiv.appendChild(currentDescription)
}

for (let i = 0; i < SortedNamesArray.length; i++) {
    display(i)
    displayDiv.appendChild(document.createElement("br"))
}
console.log(displayDiv.innerHTML)
