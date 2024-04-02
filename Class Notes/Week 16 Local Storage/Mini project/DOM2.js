////////////////////////////////////Solution 2//////////////////////////////////
// When the DOM content is loaded, execute the following function
    // Get the playerForm element from the DOM and store it in a variable
    const playerForm = document.getElementById("playerForm")
    // Get the leaderboard element from the DOM and store it in a variable
    const leaderboard = document.getElementById("leaderboard")
    // Load players from local storage when the page loads, or initialize an empty array if there are no players
    
    // Render player cards on page load
    // Add event listener for form submission
        // Prevent the default form submission behavior
        // Call the addPlayer function when the form is submitted

    // Define the addPlayer function
        // Get input values from the form and store them in variables
        const firstName = document.getElementById("firstName")    
        const lastName = document.getElementById("lastName")    
        const country = document.getElementById("country")    
        const score = document.getElementById("score")    
        // Create a player object with the input values
        const player = {
            firstName: `${firstName.value}`, 
            lastName: `${lastName.value}`,
            country: `${country.value}`, 
            score: `${score.value}`
        }
        // Add the player object to the players array
        const addPlayer = () => {
            const playerJson = JSON.stringify(player, undefined, 4)
            const players = []
            // Save the updated players array to local storage
            players += playerJson
            localStorage.setItem("player", playerJson)
        }
        
        
        // Clear the form inputs
        firstName.innerText = ""
        lastName.innerText = ""
        country.innerText = ""
        score.innerText = ""
        // Render the updated player cards
        

    // Define the renderPlayers function
        const renderPlayers = () => {
            let card=document.createElement("div")
            card.classList.add("card")
                
        }
        
        // Clear the previous player cards from the leaderboard
        // Iterate over the players array and create a card for each player
            // Create a new div element for the player card
            // Add the 'card' class to the player card
            // Set the inner HTML of the player card with player information and buttons
            
            // Append the player card to the leaderboard
            

    // Add event listener for click events on the leaderboard (event delegation)
        // Get the target of the click event
        // Check if the clicked element has the 'addScore' class
            // If yes, call the updateScore function with the index and 5 points
            
        // Check if the clicked element has the 'subtractScore' class
            // If yes, call the updateScore function with the index and -5 points
            
        // Check if the clicked element has the 'deletePlayer' class
            // If yes, call the deletePlayer function with the index
           

    // Define the updateScore function
        // Update the score of the player at the specified index by adding the points
        // Update the players array in local storage
        // Re-render the player cards
        

    // Define the deletePlayer function
        // Remove the player at the specified index from the players array
        // Update the players array in local storage
        // Re-render the player cards
       
