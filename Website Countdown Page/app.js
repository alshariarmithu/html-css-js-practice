
var countDownDate = new Date("Oct 26, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((distance%(1000*60*60))/(1000*60));
    var sec = Math.floor((distance%(1000*60))/(1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    if(distance<0)
    {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hrs").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }
},1000);



