var age = prompt("Age: ");
var salary = prompt("Salary: ");

if (age < 18) {
  console.log("Not eligible");
} else if (age >= 18 && salary < 20000) {
  console.log("Low Salary");
} else if (salary >= 50000) {
  console.log("High Salary");
} else {
  console.log("Medium Salary");
}
