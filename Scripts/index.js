// Imported Functions From Database ==>

import { Database } from "../Data_Resources/Database.js";

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Device_Not_Eligible.html' ) ) { runOnStart(); }
    else if ( location.pathname.includes( 'Add_User.html' ) ) { Restart(); }
    else { // For index.html

        Check_Data();

        let Login_button = document.getElementById( 'different' );
        Login_button.addEventListener( 'click', () => { Login(); });

        let Send_Feedback_button = document.getElementById( 'Send_Feed' );
        Send_Feedback_button.addEventListener( 'click', () => { Send_Feedback(); });

    };

};

function Restart() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "url('../Images/Start_Up_Logo.jpg')";
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    setTimeout ( function zoom() {

        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";   
        
    }, 15575); setTimeout ( () => {

        document.body.style.backgroundImage = "none";
        document.body.style.background = "none";
        document.body.style.backgroundColor = "#000000";
        location.href = "../Screen/User_Setup/Devices.html";

    }, 18000);

};

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

};

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
};

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
                                location.href = "Screen/OS_Loader.html";
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
                    location.href = "Screen/OS_Loader.html";
                }
                return;
            } //Do not Return Anything just add 1 to check variable
        }
        alert("User ID not Available");
    }
};

function Send_Feedback() {

    document.body.style.cursor = 'progress';

    Database.Read_Data( 'Feedback', 'Feedback' );

    setTimeout( () => {

        document.body.style.cursor = 'Default';

        var Feedback_length = JSON.parse( sessionStorage.getItem( 'Feedback' ) );
        Feedback_length = Feedback_length.length + 2;

        sessionStorage.removeItem( 'Feedback' );

        // Comment == Feedback { returns --> True };

        let Comment = document.querySelector('textarea').value;

        if ( Comment == '' ) {

            alert("Cannot Send Empty Comment...!!! "); // Empty Comment

        } else if ( Comment.length <= 35 ) { alert("Too Short Comment..."); }

        else {

            var Send = confirm("Confirm to Send Feedback ?");

            if ( Send ) {
                
                var name = prompt("Please Enter your Name", "");

                if ( name == null ) {

                    alert("Feedback Failed to Send..."); // Failed to Send

                } else if ( name == "" ) {

                    alert("Please Enter a Name..."); // Empty Response

                } else {

                    var Contact = prompt("Please Enter your Contact Information so that We can Contact you. It can be a Mobile Number, email, address, etc... But it should be Real! ", "");

                    if ( Contact == null ) {

                        alert("Feedback Failed to Send..."); // Failed to Send

                    } else if ( Contact == "" ) {

                        alert("Please Enter a valid Contact Information..."); // Empty Response

                    } else {

                        var Existing_User = prompt( "Do you have any of your Existing User ? If Yes ! Then Please Enter the User's Name or If No ! Then you can enter Owner too", 'Owner' )
                        
                        if ( Existing_User == null ) {

                            alert( 'Feedback Failed to Send...' ); // Failed to Send

                        } else {

                            var Users = sessionStorage.getItem( 'Data' );
                            Users = JSON.parse( Users );

                            var only_Users = new Array();

                            for ( var a = 0; a < Users.length; a++ ) {

                                only_Users.push( Users[a]['User'] );

                            }; Users = only_Users; only_Users = null;

                            if ( Users.indexOf( Existing_User ) != -1 ) {

                                var Feedback = [

                                    name, Contact, Existing_User, Comment,

                                    'Empty', 'Empty', 'Empty',

                                    ( '=IF(REGEXMATCH(F' + Feedback_length +
                                    ', "(?i)BAD"), "Inappropriate User", "Appropriate User")' )

                                ];

                                Database.Create_Data( 'Feedback', Feedback );

                                setTimeout( () => {

                                    alert( 'Thank You for your Feedback...' );
                                    return true;

                                },1000 ); // Exit ( Comment Sent )

                            } else {

                                alert( 'Sorry ! This User does not Exists...' );

                            };

                        };

                    };

                };

            } else { return; }  // Exit ( Do not Send Comment )

        };

    },2500 );

};

function Check_Data() {

    if ( ( sessionStorage.getItem("Data") == null ) || ( sessionStorage.getItem("Accounts_Data") == null ) ) {

        location.href = "./Data_Resources/Load_Data.html";

    } else {

        Users(); runOnStart(); // Else All Good...

    }

};