/* Frequency counter/multiple pointers
Implement a function called areThereDuplicates which accepts a variable number of arguments and checks whether or not there are duplicates among the arguments. Use either frequency counter OR multiple pointers. 
*/

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
