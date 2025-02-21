let num = prompt("Enter a number:");

if (!isNaN(num)) {
  let sum = num.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  console.log(`Sum of digits: ${sum}`);
} else {
  console.log("Please enter a valid number.");
}
