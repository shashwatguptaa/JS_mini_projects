const randomColor= function(){
    let hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let change
const startchangecolor= function(){
    change=setInterval(changecolor,1000);
}
function changecolor(){
    document.body.style.backgroundColor=randomColor();
}
const stopchangecolor=function(){
    clearInterval(change);
    change=null
}
document.getElementById('start').addEventListener("click",startchangecolor);
document.getElementById('stop').addEventListener("click",stopchangecolor);