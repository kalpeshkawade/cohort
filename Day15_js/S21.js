var num = prompt("Enter a number");

for (var i = 0; i < num.length - 1; i++) {
  if (num[i] % 2 == 0) {
    console.log("even number", num[i]);
  }
  //    else {
  //     console.log("odd number", num[i]);
  //   }
}
