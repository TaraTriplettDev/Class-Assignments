// ////////////////////////////DOM Manuplation Part 2///////////////////////////////////
// Creating an Element
// general Syntax

document.createElement("tagname")

/////////////////////////////////////////////////////////////////////////
// let title = document.createElement("h1")

// // class attribute

// title.className = "First h1"

// // style

// title.style.fontFamily = "cursive"

// // adding content

// title.textContent = "DOM Manipulation Week 2"

// console.log(title)
/////////////////////////////////////////////////////////////////////////

// let paragraph = document.createElement("p")
// paragraph.id = "First Paragraph"
// paragraph.style.fontSize = "12px"
// paragraph.textContent = "DOM Week 2"

// console.log(paragraph)

// Creating elements
let title 
for(let i = 0; i < 3; i++){
  title = document.createElement("h1")
  title.textContent = `This is header number ${i + 1}`
  title.style.fontSize = "24px"
  title.className = "header class"
  title.id = `header ${i + 1}`
  console.log(title)
  document.body.appendChild(title)
}

// Appending child to a parent element

// general Syntax
// document.body.appendChild("variable that is holding your element")


// document.body.appendChild(paragraph)


// Removing a child element from a parent node





//////////////////////////////Class Activity See the Mini Project/////////////////////////