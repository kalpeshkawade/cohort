var val = prompt("Enter the value:");
var sum = 0;

for (var i = val.length - 1; i >= 0; i--) {
  sum = sum * 10 + parseInt(val[i]); // Extract and reverse each digit
}

console.log("Reversed number:", sum);
