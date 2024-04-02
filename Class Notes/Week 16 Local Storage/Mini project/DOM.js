
///////////////////////////////////Attention!/////////////////////////////////////
//..........................This is one way of achiving the task.................. 
//..........................you have been assigned but not the o..................
//..........................nly way of doing it.Please challenge..................
//..........................yourself to come up with your own wa..................
//..........................y to solve this mini project.       ..................
//////////////////////////////////////////////////////////////////////////////////


//    Select the player form element by its ID and store it in a variable called playerForm.
let playerForm=document.getElementById("playerForm")
//    Select the leaderboard element by its ID and store it in a variable called leaderboard.
let leaderboard=document.getElementById("leaderboard")
//    Add an event listener to the playerForm for the 'submit' event.

playerForm.addEventListener("submit",(event)=>{
  //    Inside the submit event listener callback function:
//       Prevent the default form submission behavior using event.preventDefault().
//       Call the addPlayer() function to handle adding a new player.
  event.preventDefault()
  addPlayer()
})

//    Define the addPlayer() function:
function addPlayer(){
  //       Retrieve the input values for first name, last name, country, and score from the form inputs.
  let firstName=document.getElementById("firstName").value;
  let lastName=document.getElementById("lastName").value;
  let country=document.getElementById("country").value;
  let score=document.getElementById("score").value;
  //       Create a new card element using document.createElement('div') and add the 'card' class to it.
  let card=document.createElement("div")
  card.classList.add("card")
//       Set the innerHTML of the card element to include the player's name, country, score, and buttons.
card.innerHTML= `
<h1>${firstName}</h1>
<h1>${lastName}</h1>
<h1>${country}</h1>
<h1>${score}</h1>
<button id="addPoint">Add 5 Points</button>
<button id="subtractPoint">Subtract 5 Points</button>
<button id="deletePlayer">Delete Player</button>
`
//       Append the card element to the leaderboard.
leaderboard.appendChild(card)
//       Select the buttons within the card for adding score, subtracting score, and deleting the player.
let addPoint=document.getElementById("addPoint")
let subtractPoint=document.getElementById("subtractPoint")
let deletePlayer=document.getElementById("deletePlayer")
//       Add event listeners to each button:
//           - Add an event listener to the 'Add 5 Points' button that calls updateScore() with 5 as an argument.
addPoint.addEventListener("click", updateScore(5) )
//           - Add an event listener to the 'Subtract 5 Points' button that calls updateScore() with -5 as an argument.
subtractPoint.addEventListener("click", updateScore(-5))
//           - Add an event listener to the 'Delete' button that removes the card element from the leaderboard.
deletePlayer.addEventListener("click", ()=>{
    card.remove()
} )

//       Define the updateScore() function:
function updateScore(){
  card.get
}
//            Retrieve the current score value from the card's DOM.
//            Parse the current score value to an integer.
//            Update the current score value by adding or subtracting the specified points.
//            Update the displayed score value in the DOM with the new score value.
}


  

//////////////////////////////////
//////////////////////////////////
// const playerForm = document.getElementById("playerForm")
// const leaderboard = document.getElementById("leaderboard")
// const firstName = document.getElementById("firstName").value
// const lastName = document.getElementById("lastName").value
// const country = document.getElementById("country").value
// const score = document.getElementById("score").value

// const addPlayer = () => {
//   const addPlayerButton = document.getElementById("addPlayer")
//     addPlayerButton.addEventListener("click", () => {
//       div = document.createElement("div")
//       div.classList.add("card")
//       let player = {
//         firstName: `${firstName}`,
//         lastName: `${lastName}`,
//         country: `${country}`,
//         score: `${score}`
//       }
//       let playerJson = JSON.stringify(player, undefined, 4)
//       localStorage.setItem("player", playerJson)
//       div.appendChild(playerJson)
//   })
//   leaderboard.appendChild(div)
// }

