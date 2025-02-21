var a = Number(prompt("Enter a number1"));
var b = Number(prompt("Enter a number2"));
var c = Number(prompt("Enter a number3"));

if (a > b && a > c) {
  console.log(a + " is largest number");
} else if (b > a && b > c) {
  console.log(b + " is largest number");
} else {
  console.log(c + " is largest number");
}
