//datatypes in js
//(number, string, boolean,null, undefined)


//arithemetic operators
//(+,-,/,%,**)

let a = 5;
let b = 6;

let sum = (a+b);
console.log(sum);

let sub = (a-b);
console.log(sub);

let mul = (a * b);
console.log(mul);

let mod = (a % b);
console.log(mod);

let  div = (a / b);
console.log(div);

let  pow = (a ** b);
console.log(pow);

//assignment operators
//(=,+=,-=,/=,*=)

let num1=3;
let num2=4;
//long form
let num= num1+num2;
console.log(num);
//short form
num +=5;
console.log(num);

num -=6;
console.log(num);

num *=3;
console.log(num);

num /=8;
console.log(num);

//comparison opeartors
//(==,===,>=,<=,!=)

let value1= 10;
let value2= 20;

let value= value1==value2;
console.log(value);

value= value1>=value2;
console.log(value);

value= value1<=value2;
console.log(value);

value= value1 != value2;
console.log(value);

//datatypes agr dekhni ho

console.log(typeof value);

//logical operators
//(&&,||,!)

let name= "waleed";
let gender= "male";

let cond1= (name==="waleed")&&(gender==="male")
console.log(cond1);

cond1= (name==="daniyal")&&(gender==="male")
console.log(cond1);

cond1=(name==="ali")||(gender==="male")
console.log(cond1);

cond1=(name==="waleed")!=(gender==="male")
console.log(cond1);

console.log(typeof name);
console.log(typeof gender);

//conditional operators
//(if,elseif,else)

let nationality= "pakistani";
let district= "malir";
let age=17;

if(age>=18){
    console.log("you are eligible")
}

else if((age>=18)&&(distict==="malir")){
console.log("you are eligible to apply for this job ")

}
else{
    console.log("exit");
}
//new condittion
let username = "waleed123@gmail.com";
let password = "waleed#123";

if((username==="waleedmymn@gmail.com")&&(password==="waleed#123")){
    console.log("incorrect your username and password")

}

else if((username==="waleed123@gmail.com")||(password==="waleed@123")){
    console.log("you are loged in successfully")
}

else{
    console.log("exit");
}


//loops
//counting 1 to 10
for(i=1; i<=10; i++){
    console.log(i);
}

for(i=1; i<=10; i++){
    console.log('2', " ", i," ", '=', " ",i*2);
}
//write even numbers 1 to 20 
for(i=1; i<=20; i++){
    if(i%2==0)
    console.log(i);
}
//write odd numbers 1 to 20
for(i=1; i<=20; i++){
    if(i%3==0)
    console.log(i);
}

//while loop
let j=0;
while(j<=10){
    j++;
    console.log(j)
}



