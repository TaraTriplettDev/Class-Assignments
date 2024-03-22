// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const paragraph = document.querySelector('p')  

console.log(paragraph)


// Get each of the the paragraph using document.querySelector('#id') and by their id

const paragraphOne = document.querySelector('#one')
const paragraphTwo = document.querySelector('#two')
const paragraphThree = document.querySelector('#three')
const paragraphFour = document.querySelector('#four')

console.log(paragraphOne, paragraphTwo, paragraphThree, paragraphFour)


// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const nodeList = document.querySelectorAll('p')
console.log(nodeList)

// Loop through the nodeList and get the text content of each paragraph

//  for(let i = 0; i < nodeList.length; i++){
//    console.log(nodeList[i])
//  }
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(paragraph => {
  console.log(paragraph.textContent)
})

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

paragraphs[3].textContent = "I'm the fourth one on the list :)"

// Set id and class attribute for all the paragraphs using different attribute setting methods

paragraphs.forEach((paragraph, index) => {
  paragraph.id = `paragraph${index+1}`
  paragraph.className = 'paragraphClass'
})

// Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// Set text content, id and class to each paragraph 

paragraphs.forEach((paragraph, i)=>{
  console.log(paragraph)
  paragraph.style.fontSize="24px"
  paragraph.style.fontWeight="bold"
  paragraph.style.color="gold"
  paragraph.style.fontFamily="serif"
  paragraph.class="paragraph"
  if(i%2===0){
    paragraph.style.color="green"
  } else {
    paragraph.style.color="red"
  }
  paragraphs[0].textContent = "Paragraph 1"
  paragraphs[0].id = "One"
  paragraphs[1].textContent = "Paragraph 2"
  paragraphs[1].id = "Two"
  paragraphs[2].textContent = "Paragraph 3"
  paragraphs[2].id = "Three"
  paragraphs[3].textContent = "Paragraph 4"
  paragraphs[3].id = "Four"
  
})