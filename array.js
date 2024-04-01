//function declared as generateArrayBetween
function generateArrayBetween(num1 ,num2){
    // prompts  empty array to store the numbers between val1 and val2
   let arr =[];
   for(let i = num1; i<= num2; i++){
    //pushes each number to array
    arr.push (i);
   }
   // Return the array containing the numbers between num1 and num2
   return arr;
}