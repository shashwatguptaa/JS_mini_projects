const clock=document.getElementById('clock')
setInterval(()=>{
    let date=new Date
    clock.innerHTML= date.toLocaleTimeString();
},1000)//milliseconds,repeats the function in every given milliseconds