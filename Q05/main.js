console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  // YOUR CODE HERE
  //Removing spaces from the string
  let list1 = strArr[0].replace(/ /g, "");
  let list2 = strArr[1].replace(/ /g, "");
  //Splitting the list of numbers
  list1 = list1.split(",");
  list2 = list2.split(",");
  console.log(list1);
  console.log(list2);
  //Spreading the list of numbers in the array
  //Creating an empty string to add the intersections of the two lists of numbers to it
  let interSection = "";
  //Nested loops to search the two lists at once
  list1.forEach((element1, index1) => {
    list2.forEach((element2, index2) => {
      //Search for the intersections 
      if (element1 === element2) {
        //If the first list1 is bigger (To abandon the last ',' in the returned string)
        if(list1.length > list2.length){
          //If the list1 is finished add the last number without ',' at the end 
          if(index1 === list1.length -1 ){

            interSection = interSection + element1;
            return interSection
  
          }

        }
        //If the second list2 is bigger (To abandon the last ',' in the returned string)
        else if(list1.length < list2.length){
          //If the list2 is finished add the last number without ',' at the end 
          if(index2 === list2.length -1 ){

            interSection = interSection + element1;
            return interSection
  
          }
          
        }
        //If the two lists are equal (To abandon the last ',' in the returned string)
        else if(list1.length === list2.length){
          if(index1 === list1.length -1 ){

            interSection = interSection + element1;
            return interSection
  
          }


        }
        // To add the intersection if the list is not finished yet
        interSection = interSection + element1 + ",";
        
      }
    });
  });
  return interSection;
}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
