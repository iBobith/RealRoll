const button = document.getElementById("1d6");
const Button2 = document.getElementById("1d20")
const div = document.getElementById("diceBox");
// select the button and div

function changeContent() {
    div.innerHTML = "<p>New HTML content!</p>";
}
//define the function to change the HTML content

button.addEventListener("click", changeContent);
//add event listener to the button
