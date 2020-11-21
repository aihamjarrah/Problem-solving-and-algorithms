console.log("Problem Solving Q: 2 ");

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  // YOUR CODE HERE
  sen = sen.replace(/[!,\-,.,\,,\*,&,|]/g, "");
  console.log(sen);
  const senSplit = sen.split(" ");
  console.log(senSplit);
  let biggest = "";
  senSplit.forEach((element, index) => {
    if (element.length > biggest.length) {
      biggest = element;
    }
  });
  return biggest;
}

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
