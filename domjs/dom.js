 function change(){
            document.getElementById("text").textContent="Document object model";
         }
        let color=false;
         function mode(){
            
            if(color)
            {document.body.style.backgroundColor="white";    
            document.body.style.color="black";
            document.getElementById("dark").textContent="dark mode";
            
            }
            else{  
                document.body.style.backgroundColor="black";
                 document.body.style.color="white";
                 document.getElementById("dark").textContent="light mode";
                 color="white";
            }
         }

         
         let head=document.getElementById("text");
         head.getAttribute("id");
         console.log(head);

         let head1=document.getElementById("text");
         head.setAttribute("class", "newclass");
         console.log(head1);

         
