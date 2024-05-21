// Exported Functions From Database ==>

import { Database } from '../Data_Resources/Database.js';

import { give_alert } from './Alert.js';

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

    switch ( know ) {

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

    }; return window.location.href = "../../Screen/User_Setup/Mother_Board.html";

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

                            a[c] -= d; d = a[c];

                            a = Database.Json.Stringify_Column( 'Money', 'Accounts_Data' );

                            if ( a == -1 ) {

                                return give_alert( 'Sorry ! An Error Occured, But' +
                                'your Money will not lose', () => {

                                    return give_alert( 'We are Redirecting you to Home Page...', () => {

                                        location.href = '../../index.html'; return -3;

                                    });

                                });

                            }; Database.Update_Data( 'Accounts', a + ( c + 2 ), d );

                            document.body.style.cursor = "Progress";

                            setTimeout( () => {

                                var Account = new Object();
                                Account.Device = localStorage.getItem("device_type");
                                Account.Payment = true;
                                Account = JSON.stringify(Account);
                                localStorage.setItem("Add_User", Account);

                                var update = JSON.parse( sessionStorage.getItem("Accounts_Data") );
                                (update[c]).Money = d; d = null;
                                update = JSON.stringify( update );
                                sessionStorage.setItem("Accounts_Data", update);

                                return give_alert( 'Payment Successful', () => {

                                    location.href = "../../OS_Package/OS_Setup/OS_Setup.html";

                                    document.body.style.cursor = "Default";

                                });

                            },2000 ); return 1;
                            
                        } else {

                            return give_alert( "Sorry, You can't Proceed ahead due to insufficient" +
                            "Account Balance", () => {

                                window.location.reload(); return -2;

                            });

                        };

                    } else if (c == 0) {

                        return give_alert( "You can't use Government Financial Money...", () => {

                            window.location.reload(); return 0;

                        });

                    };

                } else { c++; };

        }; return give_alert( "Wrong Security Code", () => {

            window.location.reload(); return -1;

        });

    } catch ( error ) { return give_alert( error.message, () => { return true; }); };
    
};

function Skip() {

    var ok = confirm("Are you Sure to Skip adding Mother Board... ( This Step can't be undone ❗ ) ");

    if ( ok ) { return Skip_Loopy_Loop(); }; return false;

};

function Skip_Loopy_Loop() {

    var Loopy = true; do {
            
        var command = prompt("Any Command for Boot ?", "no");

        if ( command == "no" ) {

            document.body.style.cursor = "Progress";

            var Account = new Object();
            Account.Device = localStorage.getItem( 'device_type' );
            Account.Payment = false;
            Account = JSON.stringify( Account );
            localStorage.setItem( 'Add_User', Account );

            setTimeout( () => {

                document.body.style.cursor = "Default";
                location.href = "../../OS_Package/OS_Setup/OS_Setup.html"; 

            },2000 );

        } else if ( command == "Yes" ) { return Skip_Loop(); }
        
        else if ( command == null ) {} else {

            Loopy = false; return give_alert( "Not an appropriate answer", Skip_Loopy_Loop );
        
        };


    } while ( command != "No" && command != '/exit' && command != null && command != '/reboot' &&
    command != '/restart' && command != '/power off' && Loopy == false ); return 658;

};

function Skip_Loop() {
    
    var Loopy = true; do {
                
        var command = prompt("Enter your Command to Boot...");
        var returned_value = Check_or_Run_Command( command, 'check' );

        if ( returned_value == false ) {

            Loopy = false; return give_alert( 'This is not a valid Command for Boot ❌ ', Skip_Loop );

        } else if ( returned_value == true ) {
            
            Loopy = false; return give_alert( "The Command was Successful", () => {
                
                return Check_or_Run_Command( command, 'run' );
            
            });
        
        } else if ( returned_value == 'empty_input_error' ) {

            Loopy = false; return give_alert( "Please Enter a Command... Can't access empty command box...",
            Skip_Loop );

        } else if ( returned_value == 'escape' ) { Loopy = false; };

    } while ( Loopy == true ); return 658;

};

function Check_or_Run_Command( command, check_or_run ) {

    if ( check_or_run == 'check' ) {

        if ( command == null ) { return 'escape'; } else if ( command == "" ) { return 'empty_input_error'; }
        else if ( command == '/exit' || command == '/reboot' ) { sessionStorage.clear(); return true; }
        else if ( command == "/restart" || command == '/power_off' ) { return true; }
        else { return false; };

    } else if ( check_or_run == 'run' ) {

        if ( command == '/reboot' ) {  return location.assign( '../../index.html' ); }
        else if ( command == "/restart" ) { return window.location.assign( '../System/Restart.html' ); }
        else if ( command == '/power_off' ) { return window.location.assign( '../System/Power_Off.html' ); }
        else if ( command == '/exit' ) { return true; };

    };

};