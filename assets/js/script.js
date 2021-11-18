// TODO: Declare any global variables we need
let totalTails = 0;
let totalHeads = 0;
let percentageHeads = 0;
let percentageTails = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', function(){
        console.log('Flip button clicked')
        let random = Math.random() 
        if(random < 0.5)
        {
            document.getElementById("penny-img").src = './assets/images/penny-tails.jpg'            
            document.getElementById("status-text").textContent = "You Flipped Tails!";
            totalTails++;
        } 
        else
        {
            document.getElementById("penny-img").src = './assets/images/penny-heads.jpg'            
            document.getElementById("status-text").textContent = "You Flipped Heads!";
            totalHeads++;
        }

        percentageHeads = Math.round(100 * totalHeads / (totalHeads + totalTails)); 
        percentageTails = Math.round(100 * totalTails / (totalHeads + totalTails)); 

        document.getElementById("heads").textContent = totalHeads;
        document.getElementById("tails").textContent = totalTails;
        document.getElementById("heads-percent").textContent = percentageHeads + "%";
        document.getElementById("tails-percent").textContent = percentageTails + "%";
    })

    
    document.getElementById('clear').addEventListener('click', function(){

        totalTails = 0;
        totalHeads = 0;
        percentageHeads = 0;
        percentageTails = 0;

        document.getElementById("heads").textContent = totalHeads;
        document.getElementById("tails").textContent = totalTails;
        document.getElementById("heads-percent").textContent = percentageHeads + "%";
        document.getElementById("tails-percent").textContent = percentageTails + "%";
    })

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})