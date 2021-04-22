import { names } from './names.js'

let SortedNamesArray = Object.keys(names).sort()
//Sorts list alphabetically
const displayDiv = document.getElementById('List')

function display(index) {

    let currentName = document.createTextNode(SortedNamesArray[index] + ':')
    let currentDescription = document.createTextNode(names[SortedNamesArray[index]])

    displayDiv.appendChild(currentName)
    displayDiv.appendChild(document.createElement("br"))
    displayDiv.appendChild(currentDescription)
}

for (let i = 0; i < SortedNamesArray.length; i++) {
    display(i)
    displayDiv.appendChild(document.createElement("br"))
    displayDiv.appendChild(document.createElement("br"))
}
