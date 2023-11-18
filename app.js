function navigateToDice(diceType) {
    // Redirect to the dice page with the selected dice type
    window.location.href = `${diceType}.html`;
}
document.addEventListener('keyup', function (event) {
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
