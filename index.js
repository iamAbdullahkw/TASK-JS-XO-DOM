// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let currentplayer = "X";

// DID SOMEONE WIN?
// IF NO ONE WINS THEN// SWITCH THE PLAYER

function clickButton(index) {
  if (document.getElementById(index).innerHTML === "") {
    fillButton(index, currentplayer);

    if (document.getElementById(index).innerHTML === "X") {
      currentplayer = "O";
    } else {
      currentplayer = "X";
    }
  }
  checkWinner();
}

// function winningAlert(winner) {
//   if (
//     [1, 2, 3] || [4, 5, 6] || [7, 8, 9] || [1, 4, 7] || [2, 5, 8] || [
//       3, 6, 9,
//     ] || [1, 5, 9] ||
//     [3, 5, 7] === "X" ||
//     "O"
//   );
//   return confirm(`Horraaay, ${winner} wins!`);
//   // The code here will be exectued if you press on OK button that will pop on the window
// }

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner() {
  if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(3).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(7).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(7).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(3).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(3).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(7).innerHTML == "X"
  ) {
    winningAlert("X");
  } else if (
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(2).innerHTML == "O" &&
    document.getElementById(3).innerHTML == "O"
  ) {
    winningAlert("O");
  } else if (
    document.getElementById(4).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(6).innerHTML == "O"
  ) {
    winningAlert("O");
  } else if (
    document.getElementById(7).innerHTML == "O" &&
    document.getElementById(8).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O"
  ) {
    winningAlert("O");
  } else if (
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O"
  ) {
    winningAlert("O");
  } else if (
    document.getElementById(3).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(7).innerHTML == "O"
  ) {
    winningAlert("O");
  }
}
