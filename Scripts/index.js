function eventplay(time_delay) {
    alert("Aahh... Don't Touch Me ! ");
    scroll(); //Scroll to top Function
    setTimeout ( function alert_after_scroll() {
        alert("This is Under Operation so don't touch it Please");
    }, time_delay);
}

function scroll() {
    document.body.scrollTop = 0; //For Safari Browser if so...
    document.documentElement.scrollTop = 0; //For other browsers like FIrefox, Chrome, Edge, etc...
}

function Restart(restart_time) {
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function restart_time_delay() {
        document.body.style.backgroundColor = "#ffffff";
    }, restart_time)
}