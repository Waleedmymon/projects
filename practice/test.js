// some practice tasks
//1. check numbers are positive, negative, or zero as a input

// let num=prompt("check the number is positive, negative, or zero");{
//     if(num>0){
//         alert("the number is positive")
//     }
//     else if(num<0){
//         alert("the number is negative")
//     }
//     else if(num==0){
//         alert("the number is zero")
//     }
//     else{
//         alert("invalid input");
//     }
// }

// 2. check your age as a input for take vote.

// let age=prompt("enter your age");{
//     if(age>=18){
//         alert("you are eligible for vote")
//     }
//     else if(age<18){

//     alert("you are not eligible for vote")
//     }
//     else if(String){
//         alert("enter numeric values")
//     }
//     else{
//         alert("invalid input")
//     }
// }

//3. check your grade if marks 80 or 80+ than your grade 
//is A+

// let marks=prompt("enter your marks");{
//     if(marks>80){
//         alert("your grade is A+")
//     }
//     else if(marks<80){
//         alert("your grade is A")
//     }
//     else if(marks<70){
//         alert("your grade is B")
//     }
//     else if(marks<50){
//         alert("your grade is C")
//     }
//     else if(marks<40){
//         alert("your grade is D")
//     }
//     else if(marks>=100){
//         alert("invalid input")
//     }
//     else{
//         alert("you are fail")
//     }
// }

let marks=[40,50,60,89,98,96,94,56,70];

let std_marks=marks.filter((val)=>{
    return val>90;
})
let n= prompt("Enter a number:");
let arr=[];
for (let i =1; i <= n; i++) {
   arr[i-1]=i;
}

console.log(arr);
let sum=arr.reduce((prev,cur)=>{
    return prev+cur;
})
console.log(sum);
let product=arr.reduce((prev,cur)=>{
    return prev*cur;
})
console.log(product);

