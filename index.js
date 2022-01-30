/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let number = '';
let operation = process.argv[2];
if(operation !== 'plus' || operation !== 'minus'){
    console.log('No operation provided...');
}

for(i = 3; i < process.argv.length; i++){
    if(operation === 'plus'){
    number += process.argv[i];
    }else if( operation === 'minus'){
        number -= process.argv[i];
    }
  
}
  return number  
}













// Don't change anything below this line.
module.exports = calculator;
