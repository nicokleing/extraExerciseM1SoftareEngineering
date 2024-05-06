// Initialize balance with a starting value of $100
let balance = 100;

// Function to update the balance display
function updateDisplay() {
    // Get the element with the ID 'balance' and set its text content to the current balance formatted with two decimal places
    document.getElementById('balance').textContent = balance.toFixed(2);
}

// Function to handle deposit operation
function deposit() {
    // Get the deposit amount entered by the user and convert it to a floating-point number
    let amount = parseFloat(document.getElementById('depositAmount').value);
    
    // Check if the entered amount is a valid number and greater than zero
    if (!isNaN(amount) && amount > 0) {
        // Add the deposited amount to the balance
        balance += amount;
        // Update the display to reflect the new balance
        updateDisplay();
    }
}

// Function to handle withdrawal operation
function withdraw() {
    // Get the withdrawal amount entered by the user and convert it to a floating-point number
    let amount = parseFloat(document.getElementById('withdrawAmount').value);
    
    // Check if the entered amount is a valid number, greater than zero, and does not exceed the available balance
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        // Subtract the withdrawal amount from the balance
        balance -= amount;
        // Update the display to reflect the new balance
        updateDisplay();
    } else if (amount > balance) {
        // If the withdrawal amount exceeds the available balance, show an alert message
        alert('Insufficient funds to complete this withdrawal.');
    }
}
