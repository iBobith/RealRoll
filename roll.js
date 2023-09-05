var d6 = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

// Prints dice roll to the page

function printNumber(number) {
var rollSpace = document.getElementById("rollSpace");
rollSpace.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
    var result = d6.roll();
    printNumber(result);
};