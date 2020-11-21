console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
  // YOUR CODE HERE
  sum =0 
  const newArr = arr.filter((element,index)=>{
    return element % 2 === 1 
  });
  newArr.forEach((element,i)=>{
    sum += element 
    
  })
  return sum 
  
  
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
