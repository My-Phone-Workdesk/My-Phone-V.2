function scroll() {
    document.body.scrollTop = 0; //For Safari Browser if so...
    document.documentElement.scrollTop = 0; //For other browsers like FIrefox, Chrome, Edge, etc...
}

function Restart() {
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function restart_time_delay() {
        document.body.style.backgroundImage = "url('../Images/Start_Up_Logo.jpg')";
        document.body.style.backgroundSize = "100vw 100vh";
        document.body.style.backgroundRepeat = "no-repeat";
    }, 0);
    setTimeout ( function zoom() {
        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";   
    }, 15575);
    setTimeout (power_off, 18000);
}

function power_off() {
    document.body.style.backgroundImage = "none";
    document.body.style.background = "none";
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function Devices_screen() {
        location.href = "../Screen/User_Setup/Devices.html";
    }, 0);
}

function Users() {

    var b = new Array();
        var d = new Array();
        b = JSON.parse(sessionStorage.getItem("Data"));
        
        if ( b != null ) {

            for (var id = 0; id < b.length; id++) {
                var e = b[id];
                d.push( e["User"] );
            }
            let table = document.querySelector('table');
            var c = d.length; c--;
            
            for (var a = 0; a <= c; a++) {
                table.insertRow(a + 1).insertCell(0).innerHTML = d[a];
            }

        }

}

function runOnStart() {
    const minwidth = window.matchMedia("(min-width: 0px)");
    const maxwidth = window.matchMedia("(max-width: 1279px)");
    if (minwidth.matches && maxwidth.matches) {
        if ( ! ( location.pathname.includes("/Device_Not_Eligible.html") ) ) {
            location.href="Device_Not_Eligible.html";
        }
    } else {
        //Continue with the Main Screen because Device Passed to open the website...
        if (location.pathname.includes("/Device_Not_Eligible.html")) {
            location.href = "index.html";
        }
    }
}

function Login() {
    var answer = prompt("Login to an Existing User by its User Id", "Owner");
    if (answer != null) {
        var list = new Array();
        list = JSON.parse( sessionStorage.getItem("Data") );
        var User_list = new Array();
        for (var a = 0; a < list.length; a++) {
            var b = list[a];
            User_list.push( b["User"] );
        }
        list = User_list;
        User_list = null;
        for (var check = 0; check <= (list.length - 1); check++) {
            var respond = list[check];
            if ( respond.toLowerCase() == answer.toLowerCase() ) {
                //The User Passed Away
                if ( ! ( answer.toLowerCase() == "owner" ) ) {
                    var locks_hash = new Array();
                    locks_hash = JSON.parse( sessionStorage.getItem("Data") );
                    User_list = new Array();
                    for (var a = 0; a < locks_hash.length; a++) {
                        var b = locks_hash[a];
                        User_list.push( b["User_Lock"] );
                    }
                    locks_hash = User_list;
                    User_list = null;
                    do {
                        var user_lock = prompt("Enter the User Lock of the User " + answer, "");
                        if ( user_lock != null ) {
                            if ( user_lock == locks_hash[check] ) {
                                //Correct User Lock Entered... User Recognised...!!!
                                localStorage.setItem("Amount_MB", check);
                                location.href = "Screen/Login_User.html";
                            } else if ( user_lock.toLowerCase() == "./exit" ) {
                                //Stop it and return
                                return 9211;
                            } else {
                                alert("Incorrect User Lock Entered...");
                            }
                        } else {
                            return 9211;
                        }
                        
                    } while ( ! ( user_lock == locks_hash[check] ) );
                } else {
                    //No User Lock for the Public User Owner...
                    localStorage.setItem("Amount_MB", 0);
                    location.href = "Screen/Login_User.html";
                }
                return;
            } //Do not Return Anything just add 1 to check variable
        }
        alert("User ID not Available");
    }
}