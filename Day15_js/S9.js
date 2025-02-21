var color = prompt(
  "Enter a traffic light color (red, yellow, green)"
).toLowerCase();

if (color === "red") {
  console.log("Stop!");
} else if (color === "yellow") {
  console.log("Get Ready!");
} else if (color === "green") {
  console.log("Go!");
} else {
  console.log("Not traffic light color");
}
