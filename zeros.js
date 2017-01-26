// Prompt

// Zero Dark Thirty

// Write a function that strips the zeros from a number, and returns the "stripped" number. If only a zero is passed in, the function should return NaN.

// removeZero(102302) // => 1232
// removeZero(606.203) // => 66.23
// Bonus: Write the function without ever using equality comparison operators (== or ===). Hint: You'll have to use coercion and truthy/falsey.


function strips(num){
  num = num.toString();
  var array = num.split('');
  var str= '';
  
  for(var i=0; i<array.length; i++){
    if(array.map(Number)[i]){
      str += array[i];
    } else if(isNaN(array[i])){
      str += array[i];
    }
  }
  return str;
}

strips(66.034);