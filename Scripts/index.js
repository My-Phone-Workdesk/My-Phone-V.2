// Imported Functions From Database ==>

import { Database } from "../Data_Resources/Database.js";

import { give_alert } from "./Alert.js";

// Real Script Starts from Below ==>

const Power_Off_time = 6; // in seconds

window.onload = () => {

    if ( location.pathname.includes( 'Device_Not_Eligible.html' ) ) { runOnStart(); }
    else if ( location.pathname.includes( 'Add_User.html' ) ) { Restart(); }
    else { return runOnStart(); };

};

function Backand_Home_Screen() {

    let Send_Feedback_button = document.getElementById( 'Send_Feed' );
    Send_Feedback_button.addEventListener( 'click', () => { Send_Feedback(); });

    document.addEventListener( 'keydown', ( event ) => {

        var key_control = true;

        if ( event.key == 's' ) {

            setTimeout( () => {

                if ( key_control ) {

                    return location.assign( './Screen/System/Power_Off.html' );

                };

            }, Power_Off_time * 1000 );

        };

        document.addEventListener( 'keyup', () => {
        
            if ( event.key == 's' ) { key_control = false; };
        
        });

    });

    let chatOpen = document.getElementById( 'chatButton' );
    let chatClose = document.getElementById( 'closeChat' );

    chatOpen.addEventListener( 'click', toggleChat );
    chatClose.addEventListener( 'click', toggleChat );

};

function Restart() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "url('../Images/Start_Up_Logo.jpg')";
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundRepeat = "no-repeat";

    setTimeout ( () => {

        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";   
        
    }, 15575 ); setTimeout ( () => {

        document.body.style.backgroundImage = "none";
        document.body.style.background = "none";
        document.body.style.backgroundColor = "#000000";
        location.href = "../Screen/User_Setup/Devices.html";

    }, 18000);

};

function Users() {

    const b = JSON.parse( sessionStorage.getItem( 'Data' ) );

    function removeAdministrator( value ) { return value != 'Administrator'; };
        
    if ( b != null ) {

        var e = null; var d = new Array();

        for ( var id = 0; id < b.length; id++ ) { e = b[ id ]; d.push( e.User ); };

        let table = document.querySelector( 'table' );
        
        d = d.filter( removeAdministrator ); var c = d.length; c--;
        
        for ( var a = 0; a <= c; a++ ) { table.insertRow( a + 1 ).insertCell( 0 ).innerHTML = d[ a ]; };

        return Backand_Home_Screen();

    };

};

function runOnStart() {

    const minwidth = window.matchMedia( "(min-width: 0px)" );
    const maxwidth = window.matchMedia( "(max-width: 1279px)" );

    if ( minwidth.matches && maxwidth.matches ) {

        if ( ! ( location.pathname.includes( '/Device_Not_Eligible.html' ) ) ) {

            window.location.assign( './Device_Not_Eligible.html' );

        };

    } else {
        
        if ( location.pathname.includes( '/Device_Not_Eligible.html' ) ) {
            
            window.location.assign( './index.html' );

        } else { return Check_Data(); };

    };

};

function Send_Feedback() {

    document.body.style.cursor = 'progress';

    Database.Read_Data( 'Feedback', 'Feedback' );

    setTimeout( () => {

        document.body.style.cursor = 'Default';

        var Feedback_length = JSON.parse( sessionStorage.getItem( 'Feedback' ) );
        Feedback_length = Feedback_length.length + 2;

        sessionStorage.removeItem( 'Feedback' );

        let Comment = document.querySelector( 'textarea' ).value;

        if ( Comment == '' ) {

            return give_alert( 'Cannot Send Empty Comment...!!!', () => {});

        } else if ( Comment.length <= 35 ) {
            
            return give_alert( 'Too Short Comment...', () => {});
        
        } else {

            var Send = confirm( 'Confirm to Send Feedback ?' );

            if ( Send ) {
                
                var name = prompt( 'Please Enter your Name', '' );

                if ( name == null ) {

                    return give_alert( 'Feedback Failed to Send...', () => {});

                } else if ( name == '' ) {

                    return give_alert( 'Please Enter a Name...', () => {});

                } else {

                    var Contact = prompt( 'Please Enter your Contact Information so that We can Contact ' +
                    'you. It can be a Mobile Number, email, address, etc... But it should be Real ! ', '' );

                    if ( Contact == null ) {

                        return give_alert( "Feedback Failed to Send...", () => {});

                    } else if ( Contact == '' ) {

                        return give_alert( 'Please Enter a valid Contact Information...', () => {});

                    } else {

                        var Existing_User = prompt( "Do you have any of your Existing User ? If Yes ! Then Please Enter the User's Name or If No ! Then you can enter Owner too", 'Owner' );
                        
                        if ( Existing_User == null ) {

                            return give_alert( 'Feedback Failed to Send...', () => {});

                        } else {

                            var Users = sessionStorage.getItem( 'Data' );
                            Users = JSON.parse( Users );

                            var only_Users = new Array();

                            for ( var a = 0; a < Users.length; a++ ) {

                                only_Users.push( Users[ a ][ 'User' ] );

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

                                    return give_alert( 'Thank You for your Feedback...', () => {});

                                },1000 );

                            } else {

                                return give_alert( 'Sorry ! This User does not Exists...', () => {});

                            };

                        };

                    };

                };

            } else { return give_alert( 'The Feedback cancelled ! ', () => {}); };

        };

    },2500 );

};

function Check_Data() {

    const Storage_Media = [ 'Data', 'Accounts_Data', 'Wifi', 'Files' ];

    for ( var a = 0; a < Storage_Media.length; a++ ) {

        if ( sessionStorage.getItem( Storage_Media[ a ] ) == null ) {

            return window.location.assign( './Data_Resources/Load_Data.html' );

        };
        
    }; return Users();

};

function toggleChat() {

    var chatContainer = document.getElementById( 'chatContainer' );

    if ( chatContainer.style.display === 'none' || chatContainer.style.display === '' ) {

        chatContainer.style.display = 'block';
        document.body.style.overflowY = 'visible';

    } else {
        
        chatContainer.style.display = 'none';
        document.body.style.overflowY = 'hidden';
    
    };

};