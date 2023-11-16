function rollD4() {
    const numDice = parseInt(document.getElementById('numDice').value);
    let total = 0;

    // Roll the d4 for the specified number of times
    for (let i = 0; i < numDice; i++) {
        const rollResult = Math.floor(Math.random() * 4) + 1;
        total += rollResult;
        displayResult(rollResult);
    }

    // Display the total result
    displayResult(`Total: ${total}`);
};

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML += `<p>${result}</p>`;
};

document.addEventListener('DOMContentLoaded', function () {
    // Focus on the input field when the page loads
    document.getElementById('numDice').focus();})

// Add event listener for Enter key
document.getElementById('numDice').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        rollD4();
    }
});

// Add event listener for Up and Down arrow keys to adjust the number of dice
document.getElementById('numDice').addEventListener('keydown', function (event) {
    const currentValue = parseInt(document.getElementById('numDice').value);

    if (event.key === 'ArrowUp') {
        // Increase the number of dice on Arrow Up
        document.getElementById('numDice').value = currentValue + 1;
    } else if (event.key === 'ArrowDown' && currentValue > 1) {
        // Decrease the number of dice on Arrow Down, with a minimum value of 1
        document.getElementById('numDice').value = currentValue - 1;
    }
});

