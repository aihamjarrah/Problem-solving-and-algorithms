console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  // YOUR CODE HERE
  //The puncutations in reqExpression 
  const extraChar = /[,,.;,'',"",``,!,@,#,$,%,^,&,*,(,),-,]/
  //The  letters in reqExpression
  let letters = /[a-z]/i
  //Checking the length of the username
  if(!(4<str.length<=25)){
    console.log("length error")
    return "Invalid username"
  }
  //Checking the First charachter of the usrename if it is a letter (case insensetive)
  else if(str[0].search(letters) === -1  ){ 
    console.log("Start error")
    return "Invalid username"
  }
  //Checking the username if it has extra punctuation in it ('_' is accepted)
  else if(extraChar.test(str)){
    console.log("Test error")
    return "Invlaid username"
  }
  return "Username is valid"
  
}

/* 
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123'); // => true

*/
