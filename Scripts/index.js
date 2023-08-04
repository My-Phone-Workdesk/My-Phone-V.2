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
    var Load_Line_Elm = document.getElementById("Load_Line");
    Load_Line_Elm.style.visibility = "hidden";
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function restart_time_delay() {
        document.body.style.backgroundImage = "url('../Images/Start_Up_Logo.jpg')";
        document.body.style.backgroundSize = "100vw 90vh";
        document.body.style.backgroundRepeat = "no-repeat";
        Load_Line_Elm.style.visibility = "visible";
    }, restart_time)
}