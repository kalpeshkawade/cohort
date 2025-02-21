var val = prompt("Enter the value");

var check = val.split("").reverse().join("");

if (val === check) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
