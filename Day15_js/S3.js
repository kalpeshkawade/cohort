function checkCharacterCase(char) {
  if (char.length !== 1) {
    console.log("Please enter a single character.");
    return;
  }

  if (char >= "A" && char <= "Z") {
    console.log("The character is uppercase.");
  } else if (char >= "a" && char <= "z") {
    console.log("The character is lowercase.");
  } else {
    console.log("The character is neither uppercase nor lowercase.");
  }
}

const userInput = prompt("Enter a single character:");
checkCharacterCase(userInput);
