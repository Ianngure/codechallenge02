// This function takes an array of numbers as input and returns a list of prime numbers from the array.
function primeNumberGeneration(array) {
    // Initialize an empty list to store the prime numbers.
    let result = [];
  
    // Iterate through each number in the input array.
    for (const value of array) {
      // Check if the number is a prime number. 
      
      if ((value % 2) > 0 && (value % 3) > 0 && value !== 1 || value === 3 || value === 2) {
        // If the number is a prime number, add it to the result list.
        result.push(value);
      }
    }
  
    // Return the list of prime numbers.
    return result;
  }