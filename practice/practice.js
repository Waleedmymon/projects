//question 1 string immutable does not change through index


let a = 100;
let z = a++ //post increment a=101
// console.log(a+z);

//reverse string
let str = "muhammad waleed";
let reversed = str.split("").reverse().join("");
// // console.log(reversed);

//count each character in the string
// for(let ch of str){
// console.log(ch);
// }
 

//create two diff array one number array and other string array
  let arr = ["apple", 2, "banana", 3, 1, "mango", 4, 5, "amrood"];
let string = []; 
let numbers = []; 

for (let item of arr) {
  if (typeof item === "string") {
    string.push(item);
  } else if (typeof item === "number") {
    numbers.push(item);
  }
  
}
// console.log(string);
// console.log(numbers);

// swap two numbers without using 3 number
  
let num1 =10;
let num2 = 20;
let num3;
[num1,num2] = [num2,num1];
// console.log(num1);
// console.log(num2);

//swap two numbers using 3rd number
num3 = num1;
num1 =num2;
num2 = num3;
// console.log(num2);

//find common values in two arrays and store in diff arrays
let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [11,2,13,4,15,6,17,18,9,110];
let array3 = [];
for(let item of array1){
    if(array2.includes(item)){
        array3.push(item);
    }
}
// console.log(array3);

//find product of array using reduce methode
let newArray = [1,3,5,6,7,8,9];
let product = newArray.reduce((prev,cur)=>{
    return prev*cur;
    
})
// console.log(product);