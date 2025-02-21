function findMissingNumber(arr) {
    let n = arr.length + 1; // Total numbers including the missing one
    let expectedSum = (n * (n + 1)) / 2; // Sum of first 'n' numbers
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of given numbers
    return expectedSum - actualSum; // The missing number
}

// Example usage
let numbers = [1, 2, 3, 5]; // Example input
console.log("Missing number is:", findMissingNumber(numbers));
