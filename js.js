const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde");
const milli = document.getElementById("millisecondes")
const day = document.getElementById("day");
const date_today = document.getElementById("date");
var index = 0;
var index1 = 0;
var date_now = new Date;

const clock_function = function(){
    date_now = new Date;
    if(parseInt(hour.textContent) + 12 == date_now.getHours() && window.checked == true){}
    else{hour.textContent = date_now.getHours()}
    minute.textContent = date_now.getMinutes()
    seconde.textContent = date_now.getSeconds()
    if(minute.textContent.length == 1){minute.textContent = "0"+minute.textContent;}
    if(seconde.textContent.length == 1){seconde.textContent = "0"+seconde.textContent;}
    if(hour.textContent.length == 1){hour.textContent = "0"+hour.textContent;}
    setTimeout(clock_function,1000)
    }


const clock_info = function(){
    var days_arrays = ['Sunday',"Monday","Tuesday","Wednsday","Thursday","Friday",'Saturday'];
    day.textContent = days_arrays[date_now.getDay()]
    date_today.textContent = date_now.getDate() + "/" + date_now.getMonth() + "/" + date_now.getFullYear();
}

const changeformat = function(){
    if(document.getElementById("flexSwitchCheckDefault").checked){
        window.checked = true;
        document.getElementById("formatspan").textContent = "12H"
        document.getElementById("pm-am").style.display = "block"
        if(parseInt(hour.textContent) >= 12){hour.textContent =  parseInt(hour.textContent) - 12;document.getElementById("f").textContent = "PM"}}

    else{
        window.checked = false;
        var date_now = new Date;
        document.getElementById("formatspan").textContent = "24H"
        document.getElementById("pm-am").style.display = "none"}
}   

const before_start = function(){
    if(index==0){index++;window.delay = setInterval(start,10)}
}

const start = function(){
    milli.textContent++;

    if(minute.textContent.length == 1){console.log(12);minute.textContent = "0"+minute.textContent;}
    if(seconde.textContent.length == 1){seconde.textContent = "0"+seconde.textContent;}

    if(milli.textContent == 100){seconde.textContent++;milli.textContent=0;}
    if(seconde.textContent == 60){minute.textContent++;seconde.textContent=0;}
    if(minute.textContent == 60){hour.textContent++;minute.textContent=0;}
}



const reset = function(){
    milli.textContent = "00";
    minute.textContent = "00";
    seconde.textContent = "00";
    index = 0;
    clearTimeout(window.delay)
}

const stop = function(){
    index = 0;
    clearTimeout(window.delay)
}

const tour_create = function(){
    index1 ++;
    var timing = minute.textContent+ ";" + seconde.textContent + ";" + milli.textContent;
    let tour_div = document.createElement("div");
    tour_div.className = "tourn";
    tour_div.id = "tourn";
    let p1 = document.createElement("p");
    p1.textContent = "Tour N°" + index1
    p1.className = "p0"
    let p2 = document.createElement("p");
    p2.textContent = timing
    p2.className = "p1"
    let p3 = document.createElement("p");
    p3.className = "p2"
    p3.textContent = timing;
    tour_div.appendChild(p1)
    tour_div.appendChild(p2)
    tour_div.appendChild(p3)
    document.getElementById("tours").append(tour_div)

    
}

const clear_console = function(){
    while (document.getElementById("tours").hasChildNodes()) {
        document.getElementById("tours").removeChild(document.getElementById("tours").firstChild);
      }
    index1 = 0;
}

const delete_last = function(){
    document.getElementById("tours").removeChild(document.getElementById("tours").lastChild )
}