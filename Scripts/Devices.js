// Exported Functions From Database ==>

import { Database } from '../Data_Resources/Database.js';

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Mother_Board.html' ) ) {

        Mother_Board();

        let show_or_hide = document.getElementById( 'show/hide' );
        let Payment = document.getElementById( 'Payment' );
        let skip = document.getElementById( 'Skip' );

        show_or_hide.addEventListener( 'click', show_hide );
        Payment.addEventListener( 'click', Payment_MB );
        skip.addEventListener( 'click', Skip );

    } else if ( location.pathname.includes( 'Devices.html' ) ) {

        let Desktop = document.getElementById( 'Desktop' );
        let Laptop = document.getElementById( 'Laptop' );
        let Notepad = document.getElementById( 'Notepad' );
        let Foldable = document.getElementById( 'Foldable' );
        let Tablet = document.getElementById( 'Tablet' );
        let Phone = document.getElementById( 'Phone' );

        Desktop.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Desktop' ); Setup();

        });

        Laptop.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Laptop' ); Setup();

        });

        Notepad.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Notepad' ); Setup();

        });

        Foldable.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Foldable' ); Setup();

        });

        Tablet.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Tablet' ); Setup();

        });

        Phone.addEventListener( 'click', () => {

            localStorage.setItem( 'device_type', 'Phone' ); Setup();

        });

    };

};

function show_hide() {

    let input = document.getElementById("input_code");
    let eye = document.getElementById("show/hide");

    var check = eye.className;

    if (check.includes("slash") == true) {

        eye.className = "fa-solid fa-eye";
        input.type = "password";

    } else {

        eye.className = "fa-solid fa-eye-slash";
        input.type = "text";

    };

};

function Setup() {

    var know = localStorage.getItem("device_type");

    switch (know) {

        case "Desktop":

            localStorage.setItem("Amount_MB", 4000); break;

        case "Laptop":

            localStorage.setItem("Amount_MB", 2000); break;

        case "Notepad":

            localStorage.setItem("Amount_MB", 1500); break;

        case "Foldable":

            localStorage.setItem("Amount_MB", 1000); break;

        case "Tablet":

            localStorage.setItem("Amount_MB", 800); break;

        case "Phone":

            localStorage.setItem("Amount_MB", 500); break;

        default:

            localStorage.setItem("device_type", "Administrative Device");
            localStorage.setItem("Amount_MB", 5000); break;

    }; window.location.href = "../../Screen/User_Setup/Mother_Board.html";

};

function Mother_Board() {

    var does = localStorage.getItem("device_type");
    var did = localStorage.getItem("Amount_MB");

    document.querySelector('p').innerHTML = "Selected Device: " + does;
    document.querySelector('span').innerHTML = "Price of Mother Board: " + did;

};

function Payment_MB() {

    try {

        var a = new Array();
        a = JSON.parse(sessionStorage.getItem("Accounts_Data"));
        var Data_list = new Array();

        for (var b = 0; b < a.length; b++) {

            var c = a[b];
            Data_list.push( c["Security_Code"] );

        }; a = Data_list;
        Data_list = null;

        var b = document.getElementById('input_code').value;
        var d = a.length;

        for (var c = 0; c < d; c = c ) {

                if (a[c] == b) {

                    if (c > 0) {

                        a = JSON.parse(sessionStorage.getItem("Accounts_Data") );
                        Data_list = new Array();

                        for (var ab = 0; ab < a.length; ab++) {

                            var ac = a[ab];
                            Data_list.push( ac["Money"] );

                        }; a = Data_list;
                        Data_list = null;

                        d = localStorage.getItem("Amount_MB");
                        d = parseFloat(d);
                        a[c] = parseFloat( a[c] );

                        if ( a[c] >= d ) {

                            a[c] -= d; d = a[c]; a = null;
                            
                            Database.Update_Data( 'Accounts', 'J' + ( c + 2 ), d );

                            document.body.style.cursor = "Progress";

                            setTimeout( () => {

                                var Account = new Object();
                                Account.Device = localStorage.getItem("device_type");
                                Account = JSON.stringify(Account);
                                localStorage.setItem("Add_User", Account);

                                var update = JSON.parse( sessionStorage.getItem("Accounts_Data") );
                                (update[c]).Money = d; d = null;
                                update = JSON.stringify( update );
                                sessionStorage.setItem("Accounts_Data", update);

                                alert("Payment Successful");
                                location.href = "../../OS_Package/OS_Setup/OS.html";

                                document.body.style.cursor = "Default";

                            },2000 ); return 1;
                            
                        } else {

                            alert("Sorry, You can't Proceed ahead due to insufficient Account Balance");
                            location.reload(); return -2;

                        };

                    } else if (c == 0) {

                        alert("You can't use Government Financial Money...");
                        location.reload(); return 0;

                    };

                } else { c++; };

            }; alert("Wrong Security Code"); location.reload(); return -1;

    } catch (error) { alert(error.message); }
    
};

function Skip() {

    var ok = confirm("Are you Sure to Skip adding Mother Board... ( This Step can't be undone ❗ ) ");

    if ( ok ) {

        do {
            
            var command = prompt("Any Command for Boot ?", "No");

            if ( command == "No" ) {

                document.body.style.cursor = "Progress";

                setTimeout( () => {

                    document.body.style.cursor = "Default";
                    location.href = "../../OS_Package/OS_Setup/OS.html"; 

                },2000 );

            } else if ( command == "Yes" ) {

                do {
                    
                    var command = prompt("Enter your Command to Boot...");
                    var returned_value = Check_Command( command );

                    if ( returned_value == false ) { alert("This is not a valid Command for Boot ❌ "); } 
                    else if ( returned_value == true ) { alert("The Command was Successful"); };

                } while ( command != '/exit' && command != '/reboot' && command != '/restart' && command != '/power off' );

                if ( command == '/reboot' ) {  location.href = "../../index.html"; }

            } else if ( command == null ) {} else { alert("Not an appropriate answer"); }


        } while ( command != "No" && command != '/exit' && command != null && command != '/reboot' && command != '/restart' && command != '/power off' );

    }; return false; // The User don't want to command to Boot...

};

function Check_Command( command ) {

    if ( command == null || command == "" ) {
        
        alert("Please Enter a Command... Can't access empty command box..."); return null;

    } else if ( command == '/exit' || command == '/reboot' ) { sessionStorage.clear(); }
    else if ( command == "/restart" ) { location.href = "../System/Restart.html"; }
    else if ( command == '/power off' ) { location.href = "../System/Power_Off.html" }

};