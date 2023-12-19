const but1=document.querySelector("#start");
const but2=document.querySelector("#end");
but1.addEventListener('click',function(){
 const clear=   setInterval(function(){
console.log("chandan singh");
 },1000)
 but2.addEventListener('click',function(){
    clearInterval(clear);
})
})