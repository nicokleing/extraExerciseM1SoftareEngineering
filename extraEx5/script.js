// Function to check the user's guess against a randomly generated number
function checkNumber() {
    // Get the user's guess from the input field and convert it to an integer
    const userNumber = parseInt(document.getElementById('userInput').value);
    // Generate a random number between 1 and 10 (inclusive)
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Check if the user's guess matches the randomly generated number
    if (userNumber === randomNumber) {
        // If the guess is correct, display a congratulatory message
        document.getElementById('resultMessage').textContent = 'Congratulations! You guessed the right number: ' + randomNumber;
    } else {
        // If the guess is incorrect, display a message revealing the correct number
        document.getElementById('resultMessage').textContent = 'Wrong guess! The correct number was: ' + randomNumber;
    }
}
