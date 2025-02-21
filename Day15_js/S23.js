function toggleCase(word) {
    let result = "";
    
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        
        if (char >= "A" && char <= "Z") {
            result += char.toLowerCase(); // Convert uppercase to lowercase
        } else if (char >= "a" && char <= "z") {
            result += char.toUpperCase(); // Convert lowercase to uppercase
        } else {
            result += char; // Keep non-alphabet characters unchanged
        }
    }
    
    return result;
}

// Example usage
let userInput = prompt("Enter a word:");
if (userInput) {
    console.log("Toggled Case:", toggleCase(userInput));
} else {
    console.log("Please enter a valid word.");
}
