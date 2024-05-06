// Function to check input fields and enable/disable operation buttons accordingly
function checkInputs(id1, id2, btnId) {
    // Get references to the input fields and button by their IDs
    let input1 = document.getElementById(id1);
    let input2 = document.getElementById(id2);
    let btn = document.getElementById(btnId);
    
    // Enable the button if both input fields have content, disable otherwise
    btn.disabled = input1.value === '' || input2.value === '';
}

// Function to perform arithmetic operations based on the operation parameter
function performOperation(operation) {
    let num1, num2, result;
    
    // Construct IDs for input fields based on the operation
    let id1 = operation + '1';
    let id2 = operation + '2';
    
    // Retrieve numeric values from input fields
    num1 = parseFloat(document.getElementById(id1).value);
    num2 = parseFloat(document.getElementById(id2).value);

    // Perform the selected operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            // Check if the divisor is zero to avoid division by zero error
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
    }

    // Handle special cases such as NaN or Infinity
    if (isNaN(result) || result === Infinity) {
        result = 'Error';
    }
    
    // Display the result in the corresponding result field
    document.getElementById('result-' + operation).textContent = result;
}
