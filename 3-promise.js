let Readline = require('readline');

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
    return new Promise(function(resolve) {
        // This simulates logging the feedback to an async database, etc.
        setTimeout( ()=> {
            console.log(`Thank you for your valuable feedback: ${feedback}`);
            resolve(feedback.length);
        }, 2000);
    });
}

/** Gather the user's feedback from the terminal */
function getFeedback() {
    return new Promise( (resolve,reject) => {
        try {
            rl.question("Please enter your feedback: ", (feedback) => {
                resolve(feedback);
              });
        } catch (err) {
            console.error(err);
            reject("");
        }
    });
}

/** Gather the user's feedback, process it, then log out the length */
function gatherFeedback() {
    // Problem!  This gets really hard to read with nested then() calls
    getFeedback().then( fb => {
        processFeedback(fb).then( length => {
            console.log("feedback done! Length is: " + length);
        });
    });    
}

gatherFeedback();

setInterval( () => {
    console.log("The time is: " + new Date().toString());
}, 5000);