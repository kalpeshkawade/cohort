var val = prompt("Enter the value");

console.log(val[0]);

for (var i = 1; i <= val.length - 1; i++) {
  if (val[i] === val[0]) {
    console.log("character is repeated", val[i]);
  }
}
