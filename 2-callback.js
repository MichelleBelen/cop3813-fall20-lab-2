const Readline = require('readline');

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Logs out user feedback, then returns the length
 * (has a delay to simulate DB storage, etc.)
 * @param {string} feedback Feedback provided by the user
 */
function processFeedback(feedback) {
    // This simulates logging the feedback to an async database, etc.
    setTimeout( ()=> {
        console.log(`Thank you for your valuable feedback: ${feedback}`);
    }, 2000);

    // Problem! What if this value depends on the database?
    // We need to wait until the async operation completes before returning it.
    return(feedback.length);
}

/** Gather the user's feedback asyncronously from the terminal */
function getFeedback(callback) {
    try {
        rl.question("Please enter your feedback: ", (feedback) => {
            callback(feedback);
            });
    } catch (err) {
        console.error(err);
    }
}

/**
 * Gather the user's feedback, then call a callback with the length
 * @param {function} callback A function to call once we're done
 */
function gatherFeedback(callback) {
    getFeedback(processFeedback);
    // Problem! How do I get the value back from the processFeedback function?
    const length = -1; // Setting it to this just to get it to work
    callback(length);
}

// Call the feedback 
gatherFeedback((length) => {
    console.log("feedback done! Length is: " + length);
});


setInterval( () => {
    console.log("The time is: " + new Date().toString());
}, 5000);