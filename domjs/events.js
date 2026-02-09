let btn=document.querySelector("#mode");

let curMode = "light";

btn.addEventListener("click",()=>{
    if(curMode==="light"){
        curMode = "dark";
        document.body.style.backgroundColor="black";
        document.body.style.color="white";

    }
    else{
        curMode = "light";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    console.log(curMode)
});

let newbtn=document.getElementById("newbtn");
newbtn.addEventListener("click",(e)=>{
newbtn.style.backgroundColor="blue";
newbtn.style.color="white";
console.log(e.type);
console.log(e.target);
console.log(e.clientX);
console.log(e.clientY);
})

let para=document.querySelector(".text");
console.log(para.getAttribute("class"));


//if we need to add both classes atttributes in sigle element 
//then we use class list not set attribute beacouse problem comes 
//in styling ..


// let set=document.querySelector(".text");
// console.log(set.setAttribute("class","newtext"));
// console.log(set);


let set=document.querySelector(".text");
set.classList.add("class","newtext");
console.log(set);

//if we remove class then

// let remove=document.querySelector(".newtext");
// set.classList.remove("class","newtext");
// console.log(remove);

