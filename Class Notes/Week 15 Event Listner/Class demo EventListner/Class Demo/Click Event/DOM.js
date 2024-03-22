/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Event Listeners//////////////////////////////////////////
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })


// Click

let button = document.querySelector("button")
// button.addEventListener("click", e => {
//   console.log("e gives the event listener e", e)
// })

function clickMe(e){
  alert("We can attach events on HTML elements")
  console.log("e gives the event listener e", e)  
}


