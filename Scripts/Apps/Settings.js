import { Uninstall } from "./PlayStore.js";

window.onload = () => {

    if ( location.pathname.includes( 'Settings.html' ) ) {

        var icon = document.getElementById( 'icon' );
        var option_class_2 = document.getElementById( 'option_class_2' );
        var option_class_1 = document.getElementById( 'option_class_1' );
        var option = document.getElementById( 'option_class' );
        var back = document.getElementById( 'back' );

        option.addEventListener( 'click', () => {

            return location.assign( 'Factory_Reset.html' );

        });

        option_class_1.addEventListener( 'click', () => {

            return location.assign( 'Uninstall_Apps.html' );

        });

        option_class_2.addEventListener( 'click', () => {

            return location.assign( 'WiFi.html' );

        });

        icon.addEventListener( 'click', ToggleLightorDarkMode );

        back.addEventListener( 'click', () => {

            return location.assign( '../../Home_Screen.html' );

        });

        back.addEventListener( 'mouseover', () => {

            return back.style.backgroundColor = '#303030';

        });

        back.addEventListener( 'mouseleave', () => {

            return back.style.backgroundColor = '#373737';

        });

    } else if ( location.pathname.includes( 'Factory_Reset.html' ) ) {

        var resetbtn = document.getElementById( 'resetbtn' );
        var back = document.getElementById( 'back' );
        
        resetbtn.addEventListener( 'mouseover', () => {

            return resetbtn.style.backgroundColor = '#303030';

        });

        resetbtn.addEventListener( 'mouseleave', () => {

            return resetbtn.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'click', () => {

            return location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseover', () => {

            return back.style.backgroundColor = '#303030';

        });

        back.addEventListener( 'mouseleave', () => {

            return back.style.backgroundColor = '#373737';

        });

    } else if ( location.pathname.includes( 'Uninstall_Apps.html' ) ) {

        var back = document.getElementById( 'back' );

        back.addEventListener( 'click', () => {

            return location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseleave', () => {

            return back.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'mouseover', () => {

            return back.style.backgroundColor = '#303030';

        });

        return List_Installed_Apps();

    } else if ( location.pathname.includes( 'WiFi.html' ) ) {

        var back = document.getElementById( 'back' );

        back.addEventListener( 'click', () => {

            return location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseleave', () => {

            return back.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'mouseover', () => {

            return back.style.backgroundColor = '#303030';

        });

        return List_Wifi();

    };

};

function ToggleLightorDarkMode () {

    if ( ( document.body.style.backgroundColor != 'rgb(55, 55, 55)' ) ) {

        return document.body.style.backgroundColor = '#373737'

    } else if ( document.body.style.backgroundColor = 'rgb(55, 55, 55)' ) {
    
        return document.body.style.backgroundColor = 'white'
    
    };

};

function List_Installed_Apps() {

    var AppNames = ['iMobile_Pay', 'PayTM', 'WhatsApp', 'Tata_Play', 'eVote', 'Family_Link'];
    var AppLogos = [
        
        'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg',

        'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs', 

        'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',

        'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8',

        'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',

        'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw'

    ];

    var app_list = document.body.querySelector( 'div' );
    app_list = app_list.querySelector( 'ul' );

    const Current_User_Data = JSON.parse( sessionStorage.getItem( 'Current_User_Data' ) );
    const All_Installed_Apps = Current_User_Data[ 0 ][ 3 ];

    var All_User_Installed_Apps = new Array();

    for ( var a = 1; a < All_Installed_Apps.length; a++ ) {

        All_User_Installed_Apps.push( All_Installed_Apps[ a ][ 'Name' ] );

    };

    for ( var b = 0; b < All_User_Installed_Apps.length; b++ ) {

        var li = document.createElement( 'li' );
        var img = document.createElement( 'img' );

        if ( AppNames.indexOf( All_User_Installed_Apps[ b ] ) == -1 ) {

            return alert( 'The App is not of My Phone V.2' ); // Temporary...

        };

        img.src = AppLogos[ AppNames.indexOf( All_User_Installed_Apps[ b ] ) ];

        var span = document.createElement( 'span' );
        span.innerHTML = ( All_User_Installed_Apps[ b ] ).replace( '_', ' ' );

        var Button = document.createElement( 'button' );
        Button.className = 'uninstall-button';
        Button.innerHTML = 'Uninstall';
        Button.id = All_User_Installed_Apps[ b ];

        Button.addEventListener( 'click', ( event ) => {

            return Uninstall( event.target.id );

        });

        li.appendChild( img );
        li.appendChild( span );
        li.appendChild( Button );

        app_list.appendChild( li );

    };

};

function List_Wifi() {

    var Wifi_Box = document.body.querySelector( 'div' );
    Wifi_Box = Wifi_Box.querySelector( 'ul' );

    const All_Wifi = JSON.parse( sessionStorage.getItem( 'Wifi' ) );

    for ( var a = 0; a < All_Wifi.length; a++ ) {

        var li = document.createElement( 'li' );
        var i = document.createElement( 'i' );
        var span = document.createElement( 'span' );
        var button = document.createElement( 'button' );

        if ( All_Wifi[ a ][ 'Signal' ].toLowerCase() == 'strong' ) {

            i.className = 'fa-solid fa-wifi';
            i.id = 'perfect';

        } else if ( All_Wifi[ a ][ 'Signal' ].toLowerCase() == 'weak' ) {

            i.className = 'fa-duotone fa-wifi-weak';

        } else if ( All_Wifi[ a ][ 'Signal' ].toLowerCase() == 'fair' ) {

            i.className = 'fa-duotone fa-wifi-fair';

        } else { i.className = 'fa-duotone fa-wifi-exclamation'; };

        span.innerHTML = All_Wifi[ a ][ 'Wifi' ];
        span.style.marginLeft = '10px';

        button.innerHTML = 'Connect';
        button.className = 'uninstall-button';
        button.id = All_Wifi[ a ][ 'Wifi' ];

        button.addEventListener( 'click', ( event ) => { button_click( event, button ); });

        li.appendChild( i );
        li.appendChild( span );
        li.appendChild( button );

        Wifi_Box.appendChild( li );

    };

    function button_click( event, button ) {

        Connect_to_Wifi( event.target.id );

        event.target.innerHTML = 'Connected';
        return button.removeEventListener( 'click', ( event ) => {
            
            button_click( event, button );
        
        });

    };

};

function Connect_to_Wifi( Wifi_Name ) {

    console.log( Wifi_Name );

    return alert( 'The Wifi ' + Wifi_Name + ' is Connected Successfully ! ' );

};