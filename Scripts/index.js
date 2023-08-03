function eventplay(time_delay) {
    alert("Aahh... Don't Touch Me ! ");
    scroll(); //Scroll to top Function
    setTimeout ( function alert_after_scroll() {
        alert("This is Under Operation so don't touch it Please");
    }, time_delay);

    /*
    Set Timeout function is inbuilt in javascript and uses to delay time in this format below -->

    setTimeout ( function ~Name of Function~ {
        ~Code should be run after time delay or after this set timeout function executed~
    }, ~Number of Seconds of Time delay x1000 to make it miliseconds~);

    Set Timeout function only reads miliseconds so 1 second = 1000 miliseconds so it is said to multiply seconds of time delay by 1000

    */
}

function scroll() {
    document.body.scrollTop = 0; //For Safari Browser if so...
    document.documentElement.scrollTop = 0; //For other browsers like FIrefox, Chrome, Edge, etc...
}
