// for counter 
var i=60
setInterval(()=>{        
    i--    
    document.getElementById("number").innerText=(i)%60
    if(i==0) i=60
},1000)
    
// for toggle btn
var btn = document.getElementById("toggleBtn")
var body = document.getElementsByTagName("body")[0]
body.style.background ="white"
btn.addEventListener("change",()=>{
    var bgColor = body.style.backgroundColor;
    console.log("btn clicked")
    console.log(bgColor)
    if(bgColor== "white")
        body.style.background="#212529"
    else
        body.style.background="white";
    });