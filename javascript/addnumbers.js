/**
 *  99999
 *    999
 * 100998
*/
let result = [];
let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];
console.log(l1, l2);
/*let maxlength = (l1.length >= l2.length) ? l1.length : l2.length;
console.log(maxlength);
for (let index = maxlength; index < 0; index--) {
    let numl1 = (l1[index] != undefined) ? l1[index] : 0;
    let numl2 = (l2[index] != undefined) ? l2[index] : 0;
    let num = numl1 + numl2;
    if (num < 9) result.
}*/

var sum = function(num1, num2){

};

var addTwoNumbers = function(l1, l2){
  let bitcarry = 0;
  let longlist = (l1.length >= l2.length) ? l1 : l2;
  for (let index = 0; index <= longlist.length; index++) {
    let numl1 = (l1[index] != undefined) ? l1[index] : 0;
    let numl2 = (l2[index] != undefined) ? l2[index] : 0;
    let num = numl1 + numl2 + bitcarry;
    if (num < 10) {
        result.push(num);
        bitcarry = 0;
    }
    else {
        result.push(num-10);
        bitcarry = 1;
    }
  }
  return result;
}

addTwoNumbers(l1, l2);
console.log(result);