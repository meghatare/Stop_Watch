let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
