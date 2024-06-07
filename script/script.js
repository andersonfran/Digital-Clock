//calling showtime function 
setInterval(showtime, 1000);

//showtime function 
function showtime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // time 12 hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "pm";
    } else if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currenttime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        " " +
        am_pm;

    // displaying time 
    document.getElementById("clock").innerHTML = currenttime;
}

showtime(); // To display time immediately

