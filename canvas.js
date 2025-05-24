const canvas = document.getElementById("canvas");
const increaseSz = document.getElementById("increase");
const decreaseSz = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEL = document.getElementById("color");
const clear = document.getElementById("close");
const ctx = canvas.getContext("2d");

let size=20
let color="black"
let x,y
let isPressed=false

canvas.addEventListener('mousedown',(e)=>{
    x=e.offsetX;
    y=e.offsetY;
    isPressed=true;
})

canvas.addEventListener('mouseup',(e)=>{
    x=undefined;
    y=undefined;
    isPressed=false;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x1=e.offsetX;
        const y1=e.offsetY;
        drawArc(x,y);
        drawline(x,y,x1,y1);
        x=x1;
        y=y1;
    }
})

function drawArc(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size/2,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
}

function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=size;
    ctx.strokeStyle=color;
    ctx.lineCap = "round";
    ctx.stroke();
}

colorEL.addEventListener('change',(e)=>color=e.target.value)
clear.addEventListener('click',(e)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

increaseSz.addEventListener('click',(e)=>{
    if(size<50){
        size=size+5;
        sizeEl.innerHTML=`${size}`
    }
})
decreaseSz.addEventListener('click',(e)=>{
    if(size>5){
        size=size-5;
        sizeEl.innerHTML=`${size}`
    }
})