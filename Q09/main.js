console.log("Problem Solving Q: 9");

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence() {
  // YOUR CODE HERE
  //Joining the array so it is a sequence of numbers and can be splitted
  joined = array.join("");
  //Splitting the array so we can get the sequences if 1's
  splitted = joined.split(0);
  //Filtering the splitted array to remove the spaces returned from splitting
  seq = splitted.filter((e, i) => {
    return e !== "";
  });
  if (!seq.length) {
    return "No sequence";
  }
  console.log(seq);
  let biggest = "";
  seq.forEach((e, i) => {
    if (e > biggest) {
      biggest = e;
    }
  });
  return biggest.length;
}

/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/
