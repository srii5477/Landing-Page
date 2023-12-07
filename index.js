// Get the first button by its class name
var button = document.getElementsByClassName ("btn btn-outline-danger")[0];

// Define a function that changes the text of the button to $1.99
function changeText (button) {
  button.textContent = "$1.99";
}

// Assign the function to the onclick event of the first button
button.onclick = function () {
  changeText (this);
};
