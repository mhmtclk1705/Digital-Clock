const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const meridiem = document.getElementById("meridiem");

function updateTime(){
    hour.innerText = (new Date().getHours()).toString().padStart(2,"0");
    minute.innerText = (new Date().getMinutes()).toString().padStart(2,"0");
    second.innerText = (new Date().getSeconds()).toString().padStart(2,"0");
    if(hour.innerText < 12){
        meridiem.innerText = "AM"
    }
    else{
        hour.innerText =(hour.innerText - 12).toString().padStart(2,"0");
        meridiem.innerText = "PM"
    }
}

setInterval(updateTime,1000);