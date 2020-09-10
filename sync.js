const rls = require('readline-sync');

/**
 * Processes feedback from a user (has a delay to simulate DB storage, etc.)
 * @param {string} feedback Feedback provided by the user
 */
function processFeedback (feedback) {
    setTimeout( ()=> {
        console.log(`Thank you for your valuable feedback: ${feedback}`);
    }, 2000);
}

/** Asks a user for their feedback */
function getFeedback () {
    return rls.question("Please enter your feedback: ");
}

// Invoke the getFeedback function, get input from the user
let feedback = getFeedback();

// Process that feedback
processFeedback(feedback);

// Problem! This runs before we process our feedback.
// What if we needed a value from processFeedback here?
console.log("feedback done! Length is: " + feedback.length);


// Problem! This doesn't run until feedback is entered.
// The entire program is hijacked until we are done.
setInterval( () => {
    console.log("The time is: " + new Date().toString());
}, 5000);