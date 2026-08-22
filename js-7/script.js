 let boxes=document.getElementsByClassName("box");
 console.log(boxes);
 boxes[2].style.backgroundColor="royalblue";
document.getElementById("blue").style.backgroundColor="pink";
document.querySelector(".box").style.backgroundColor="yellow";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box");
document.querySelectorAll(".box")[1].style.backgroundColor="orange";
document.querySelectorAll(".box").forEach(e=>{
     e.style.backgroundColor="blue"
})
