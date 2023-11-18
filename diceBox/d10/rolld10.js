function rollD10() {
    const numDice = parseInt(document.getElementById('numDice').value);
    let total = 0;
    let rollResults = []; // Store results for the current roll

    // Roll the d4 for the specified number of times
    for (let i = 0; i < numDice; i++) {
        const rollResult = Math.floor(Math.random() * 10) + 1;
        total += rollResult;
        rollResults.push(rollResult);
    }

    // Display the individual roll results and the total
    displayResult(rollResults, total);
}

function displayResult(rollResults, total) {
    const resultElement = document.getElementById('result');

    // Clear the HTML content of the result element
    resultElement.innerHTML = '';

    // Display each individual roll result
    rollResults.forEach((rollResult, index) => {
        resultElement.innerHTML += `<p>Die ${index + 1}: ${rollResult}</p>`;
    });

    // Display the total result
    resultElement.innerHTML += `<p>Total: ${total}</p>`;
}

// Add event listener for global key press on the document
document.addEventListener('keyup', function (event) {
    // Check if the key pressed is Enter
    if (event.key === 'Enter') {
        rollD10();
    }

    // Check if the key pressed is Spacebar
    if (event.key === ' ' || event.key === 'Spacebar') {
        // Navigate back to the menu screen
        window.location.href = 'diceBox.html';
    }

    // Map number keys to corresponding dice rollers
    const diceMap = {
        '1': 'd4',
        '2': 'd6',
        '3': 'd8',
        '4': 'd10',
        '5': 'd12',
        '6': 'd20',
    };

    // Check if the key pressed is a number (1-6) and navigate to the corresponding dice roller
    const diceKey = diceMap[event.key];
    if (diceKey) {
        window.location.href = `${diceKey}.html`;
    }
});

// Add event listener for changing the dice amount on global key press
document.addEventListener('keydown', function (event) {
    const currentValue = parseInt(document.getElementById('numDice').value);

    if (event.key === 'ArrowUp') {
        // Increase the number of dice on Arrow Up
        document.getElementById('numDice').value = currentValue + 1;
    } else if (event.key === 'ArrowDown' && currentValue > 1) {
        // Decrease the number of dice on Arrow Down, with a minimum value of 1
        document.getElementById('numDice').value = currentValue - 1;
    }
});

