let Gparent=document.getElementById("grandparent")
   Gparent.addEventListener("click",(e)=>{
    Gparent.style.backgroundColor="lightblue"
   
   },false)
let Pparent=document.getElementById("parent")
 Pparent.addEventListener("click",(e)=>{
    Pparent.style.backgroundColor="lightgrey"

   
 },false)
let Cchild=document.getElementById("child")
Cchild.addEventListener("click",(e)=>{
      Cchild.style.backgroundColor="lightgreen"
    // e.stopPropagation()
    
},false)


//even trickling

const G=document.getElementById("g")
G.addEventListener("click",(e)=>{
    G.style.backgroundColor="brown"
    // e.stopPropagation()
   
    
},true)
const P=document.getElementById("p")
P.addEventListener("click",()=>{
     P.style.backgroundColor="green"
  
},true)
const C=document.getElementById("c")
C.addEventListener("click",()=>{
   C.style.backgroundColor="orange"
},true)

