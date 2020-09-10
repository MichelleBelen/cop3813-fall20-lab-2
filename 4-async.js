let Readline = require('readline');

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Logs out user feedback, then returns the length
 * @param {string} feedback Feedback provided by the user
 */
async function processFeedback (feedback) {
    return new Promise(function(resolve) {
        // This simulates logging the feedback to an async database, etc.
        setTimeout( ()=> {
            console.log(`Thank you for your valuable feedback: ${feedback}`);
            resolve(feedback.length);
        }, 2000);
    });
}

/** Gather the user's feedback from the terminal */
async function getFeedback () {
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

/** Gather the user's feedback */
async function gatherFeedback() {
    let fb = await getFeedback();
    let length = await processFeedback(fb); // Return message length
    console.log("feedback done! Length is: " + length);
}

gatherFeedback();

setInterval( () => {
    console.log("The time is: " + new Date().toString());
}, 5000);