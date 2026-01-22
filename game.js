let boxes=document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn") ;
let msgcontainer=document.querySelector(".msg-container");
let winner= document.querySelector(".msg");
let hidden= document.querySelector(".hide");
let new_btn= document.querySelector("#new-game");

let turnO=true; //playerX, playerO
//2D array
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



let enabledbtn=()=>{

        for(let box of boxes){
             box.innerText = "";
            box.disabled=false;
           
        }
        
    }



reset_btn.addEventListener("click",()=>{
    
    turnO=true;
    hidden.classList.add("hide");
    
    enabledbtn();



})




let disabledBtn = ()=>{
    for(let box of boxes){
        
            box.disabled=true;
        
        } 
        
    }                               
        let showWinner=()=>{
            hidden.classList.remove("hide");
        }

let checkWinner=()=>{
    for(let pattern of winPatterns){
        
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                winner.innerText= `congratulations winner is ${pos1Val}`;
                
                      
                showWinner();
                 
                
    disabledBtn();
                
            }
            
        }
         
    } 
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button is clicked ")
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
       checkWinner();
          
    })
   
     
    
})

new_btn.addEventListener("click",()=>{
    turnO = true;
    hidden.classList.add("hide");
    enabledbtn();

})