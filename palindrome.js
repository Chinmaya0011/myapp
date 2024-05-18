// let str="racecar";

// function isPalindrome(str){
//   let str1="";
//   for(let i=str.length-1;i>=0;i--){
//     str1+=str[i]
//   }
// return str===str1
// }
// console.log(isPalindrome(str))


// function toSum(arr,sum){

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]+arr[j]===sum){
//             return [i,j];
//         }
//     }
// }

// }
// console.log(toSum([1,2,3,4,3],5))
// What will be the output of this code?
// var x = 10;
// function foo() {
//   console.log(x);
// }
// foo();
// // What will be the output of this code?
// var x = 5;

// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer();
// console.log(x);

// // What will be the output of this code?
// var arr = [1, 2, 3, 4, 5];

// function modifyArray(array) {
//   array.push(6);
//   array.pop();
//   array.unshift(0);
//   array.shift();
//   return array;
// }

// // console.log(modifyArray(arr));
// let x=[12,11];

// function change(x){
//  x.push(11)
// }
// change(x);
// console.log(x)
// What will be the output of this code?
function outer() {
    var x = 10;
  
    return function() {
      console.log(x);
    };
  }
  
  var innerFunctions = [];
  for (var i = 0; i < 3; i++) {
    innerFunctions.push(outer());
  }
  

  