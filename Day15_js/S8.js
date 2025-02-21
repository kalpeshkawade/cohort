var Name = prompt("Enter name: ");
var Time = Number(prompt("Enter time(24-hour-format): "));

if (Time >= 5 && Time <= 12) {
  console.log("Good Morning", Name);
} else if (Time >= 13 && Time <= 17) {
  console.log("Good Afternoon", Name);
} else if (Time >= 18 && Time <= 21) {
  console.log("Good Evening", Name);
} else if (
  (Time === 22 || Time === 23 || Time === 24 || Time < 5) &&
  Time !== 0
) {
  console.log("Good Night", Name);
} else {
  console.log("please enter Time in 24-hour format");
}
