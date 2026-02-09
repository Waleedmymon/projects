// array

let courses=["mathematics", "physics","english","computer","chemistry","biology","islamiat"];


// document.writeln(courses[2]); show only english

//if delete some values from array
courses.pop();
courses.pop(); //delete from last 

courses.push("urdu");
courses.push("sindi");// add value in the last

courses.shift();//delete from the start

courses.unshift("maths")//add in the start
console.log(courses);
courses.splice(1,5,"web development"); //in splice enter three things
console.log(courses);                    //first index replace value and 
let arr=[1,2,3,4,5];                    //2nd indx taq remove values and then third thing add values
arr.splice(2,3,5);
console.log(arr);

console.log(courses);  
let course=courses.slice(0,6); //slice create new array 
console.log(course);            //previous array not change

console.log("<br><br>")                 



let fruits=["banana","apple","Amrood"];

fruits[0]="strawberrys";//we can replace values
console.log(fruits);


let newarr=arr.concat(courses);//concat use for add 2 or more arrays
console.log(newarr);

let concatarrays=arr.concat(courses,fruits);
console.log(concatarrays)

console.log(concatarrays.length); //length calculate of array



 document.writeln(courses);

 document.writeln("<br><br>")

