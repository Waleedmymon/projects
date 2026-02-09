// function mul(x,y){
// console.log(x*y);
// }
// mul();

// function myFunc(a,b){ //these are parameters
// return a+b;

// }
// let result=myFunc(10,40);//these are arguments
// document.writeln(result);

//functions parameters are like local variables of 
//function becaouse they are block scope

// function message(msg){
//     console.log(msg);
// }

// message("i love java script");


// arrow functions 
// special use for small works 
//like calculate sun, multipication etc.

//calculate sum with arrowfunction
// let arrowsum=(a,b) =>{
//     console.log(a+b);
// }
//calculate multiplication with arrowfunction
// let arrowmul=(x,y) =>{
//     console.log(x*y);
// }

//calculate divide with arrowfunction

//let arrowdiv=(i,j) =>{
    //console.log(i/j);
//     return i/j;
// }


//practice questios

//function countvowels(str){
    //apna college
//     let count=0;
//     for(let char of str){
//     if(char ==='a' || 
//         char ==='e' ||
//          char==='i' ||
//           char==='o' ||
//            char==='u')
//            {
//         count++;
//     }

// }
// console.log(count);


//use arrowfun performe same task

// let countvowel=(str)=>{
//     let counts=0;
//     for(let char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             counts++;
//         }
//     }
//     console.log(counts);
// }

// let arry=(a,b)=>{
//     return a+b;
// }
// arry(3,7);


//foreach is the higher order functions in js 
//beacouse callback function. we can pass another function in foreach 
//function it is called callback function.


//foreach ko hm methode bolty hain methods wo hoty hain jo 
//ksi datatype ya string etc ke sath jur jayn .like foreach array ke sath 
//jura hua hai



let arr=[10,20,30,40,50,60];
arr.forEach((val)=>{
    console.log(val);
})


arr.forEach(function value(arr){ //both ways are true but
    console.log(arr);               //but we prefer arrowfunction in foreach
})


// three things are very important in functions
//1)MAP 2) filter 3) reduce

let newarray=arr.map((value)=>{ //map or foreach me difference sirf ye 
    console.log(value)          //hai ke map new array create karta hai or 
})                              //foreach new array create ni krta


let tennumbers=[1,2,3,4,5,6,7,8,9,10];

let multwo=tennumbers.map((val)=>{ //map
    console.log(val*2)
}
)

let square=tennumbers.map((val)=>{
    return val*val;
})

let evenarray=tennumbers.filter((val)=>{ //we can perform evennumebr,
     return val%2===0;                     //avg,oddnumbers tasks
})                 
let even = tennumbers.filter(val=>val%2===0);//short form of arraow function
console.log(even);            
                            
let oddarray=tennumbers.filter((val)=>{
    return val%3===0;
})

let odd=tennumbers.filter(val=>val/3===1);
console.log(odd);


//reduce methode we use for cal sum,avg,multication etc
let Sum=tennumbers.reduce((prev,cur)=>{
    return prev+cur;
})

let max=tennumbers.reduce((prev,cur)=>{ //? means if :means else
    return prev>cur? prev:cur;
})

let min=tennumbers.reduce((prev,cur)=>{
    return prev<cur? prev:cur;
})

//practice questions
//Q1. we are given array marks of students.filter out that marks of students scored 90+.

//Q2. Take a num n as a imput from user. create an array of numbers from 1 to n.
//use the reduce methode to calculate sum of all number in the array.
//use the reduce methode to product of all numbers in the array.


let scored=[40,50,60,89,98,96,94,56,70];

let std_scored=scored.filter((val)=>{
    return val>90;
})
let n= prompt("Enter a number:");
let ar=[];
for (let i =1; i <= n; i++) {
   ar[i-1]=i;
}

console.log(ar);
let sum=ar.reduce((prev,cur)=>{
    return prev+cur;
})
console.log(sum);
let product=ar.reduce((prev,cur)=>{
    return prev*cur;
})
console.log(product);