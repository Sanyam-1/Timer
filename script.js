
var starter = document.querySelector('#start');
var stoper = document.querySelector('#stop');
var reset = document.querySelector('#reset'); 
var count = document.querySelector('#counter');
var time = document.querySelector('#time');

let a = 0;
console.log(stoper);

var live_time = setInterval(()=>{
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    time.innerHTML =`${h}:${m}: ${s}`;
},500)

let intervalid = null;

function stop(){
    clearInterval(intervalid);
    intervalid = null;
}

var start_timer =()=>{
    a++;
    count.innerHTML = a;
}

starter.addEventListener('click', ()=>{
    if(intervalid){
        alert("Timer Already running");
        return;
    }
    intervalid = setInterval(start_timer,1000);
});

stoper.addEventListener('click', ()=>{
    if(intervalid==null){
        alert('Timer Already stopped');
        return;
    }
    stop();
})

reset.addEventListener('click', ()=>{
if(intervalid!=null){
    stop();  
}
a=0;
count.innerHTML = a;
})