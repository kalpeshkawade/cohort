var username = "kalpesh";
var password = "S@i1234";

var user = prompt("Enter username");
var pass = prompt("Enter password (use @ , A , a, 1): ");

if (user === username && pass === password) {
  console.log("Login Successful");
} else {
  console.log("Invalid credentials");
}
