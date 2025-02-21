var num1 = parseInt(prompt("Enter number 1:"));
var num2 = parseInt(prompt("Enter number 2:"));
var num3 = parseInt(prompt("Enter number 3:"));

if (num1 === num2 && num2 === num3) {
  console.log("All numbers are equal. No second largest.");
} else if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
  console.log("Second largest number:", num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
  console.log("Second largest number:", num2);
} else {
  console.log("Second largest number:", num3);
}
