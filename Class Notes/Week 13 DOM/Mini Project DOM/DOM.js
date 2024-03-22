// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

//// The year color is changing every 1 second

const colorGenerator = () => {
  const chars = "0123456789ABCDEF" 
  let color = "#" 
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)] 
  }
  return color
}

const colorChanger = () => {};

const header = document.querySelector('h1')

// const headerPainter = () => {
//   setInterval(()=>{
//     header.style.color = colorGenerator()
//   }, 1000)
  
// }
// headerPainter()

// //// The date and time background color is changing every on seconds

// const wrapper = document.querySelector('.wrapper')

// const wrapperPainter = () => {
//   setInterval(()=>{
//     wrapper.style.backgroundColor = colorGenerator()
//   }, 1000)
// }
// wrapperPainter()

const painter = () => {
  setInterval(()=>{
    header.style.color = colorGenerator()
    wrapper.style.backgroundColor = colorGenerator()
  }, 1000)
  
}
painter()

//// Completed challenge has background green (Done)


//// Ongoing challenge has background yellow


//// Coming challenges have background red

const listItems = document.querySelectorAll('li')

listItems.forEach((list, i)=>{
  if (list.textContent.includes("Done")){
    list.style.backgroundColor="green"
  } else if (list.textContent.includes("Ongoing")){
    list.style.backgroundColor="yellow"
  } else if (list.textContent.includes("Coming")){
    list.style.backgroundColor="red"
  }
})