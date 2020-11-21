console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(array) {
  // YOUR CODE HERE
  let number = [] 
  let count = 0 
  array.forEach((element,index)=>{
    if(number[0] === element){
      continue ;

    }
    number.unshift(element)
    count += 1
  })
  return count
}
  // })
  // uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
//   const countItems = (array)=>{ [5, 1, 2, 2, 1, 5]
//     if(!array.length){
//       return 0
//     }
//     if(number[0]===array[0]){
//       array.shift()
//       console.log(array)
//       return countItems(array)
//     }
//     number.unshift(array[0])
//     count+=1
//     array.shift()
//     return countItems(array)
//   }
//   countItems(array);
//   return count;

// }

/* 
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
