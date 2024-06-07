// Imported Functions From Database and Other Services ==>

import { Uninstall } from "./PlayStore.js";

import { give_alert } from "../Alert.js";

// Real Script Starts from Below ==>

window.onload = () => {

    if ( ( document.getElementById( 'optionsicon' ) ) != null ) {

        document.getElementById( 'optionsicon' ).addEventListener( 'click', ToggleLightorDarkMode );

    };

    if ( location.pathname.includes( 'Settings.html' ) ) {

        var icon = document.getElementById( 'icon' );
        var option_class_4 = document.getElementById( 'option_class_4' );
        var option_class_3 = document.getElementById( 'option_class_3' );
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

        option_class_3.addEventListener( 'click', () => {

            return location.assign( 'Change_Password.html' );

        });

        option_class_4.addEventListener( 'click', () => {

            return location.assign( 'Storage.html' );

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

        if ( parseFloat( localStorage.getItem( 'Amount_MB' ) ) == 0 ) {

            var Change_Password_Div = document.getElementById( 'option_class_3' );
            Change_Password_Div.style.pointerEvents = 'none';
            Change_Password_Div.style.opacity = 0.4;
            Change_Password_Div.title = "Not available for Owner.";

        };

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

    } else if ( location.pathname.includes( 'Change_Password.html' ) ) {

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

        if ( parseFloat(localStorage.getItem('Amount_MB')) == 0 ) {

            return window.location.assign('Settings.html');

        }

    } else if ( location.pathname.includes( 'Storage.html' ) ) {

        var back = document.getElementById( 'back' );
        var option_class_4_1 = document.getElementById( 'option_class_4_1' );
        var option_class_4_2 = document.getElementById( 'option_class_4_2' );

        back.addEventListener( 'click', () => {

            return location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseleave', () => {

            return back.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'mouseover', () => {

            return back.style.backgroundColor = '#303030';

        });

        option_class_4_1.addEventListener( 'click', () => {

            var container = document.getElementById('settings-container');
            document.getElementById('settings-options').remove();
            document.getElementById('optionsicon').className = 'fa-duotone fa-grid';
            document.getElementById('name').innerText = 'Apps Storage';
            document.title = 'Apps Storage';
            var heading = document.createElement( 'p' );
            heading.innerText = 'All Installed Apps :';
            container.appendChild(heading);

            var app_1 = document.createElement('UL');
            app_1.setAttribute('class', 'apps-list');

            var app_2 = document.createElement('LI');
            app_1.appendChild(app_2);

            var app_3 = document.createElement('IMG');
            app_3.setAttribute('src', 'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg');
            app_2.appendChild(app_3);

            var app_4 = document.createElement('SPAN');
            app_2.appendChild(app_4);

            var app_5 = document.createTextNode((new String("iMobile Pay")));
            app_4.appendChild(app_5);

            var app_8 = document.createElement('LI');
            app_1.appendChild(app_8);

            var app_9 = document.createElement('IMG');
            app_9.setAttribute('src', 'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw');
            app_8.appendChild(app_9);

            var app_10 = document.createElement('SPAN');
            app_8.appendChild(app_10);

            var app_11 = document.createTextNode((new String("Family Link")));
            app_10.appendChild(app_11);

            var app_14 = document.createElement('LI');
            app_1.appendChild(app_14);

            var app_15 = document.createElement('IMG');
            app_15.setAttribute('src', 'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8');
            app_14.appendChild(app_15);

            var app_16 = document.createElement('SPAN');
            app_14.appendChild(app_16);

            var app_17 = document.createTextNode((new String("Tata Play")));
            app_16.appendChild(app_17);

            var app_20 = document.createElement('LI');
            app_1.appendChild(app_20);

            var app_21 = document.createElement('IMG');
            app_21.setAttribute('src', 'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs');
            app_20.appendChild(app_21);

            var app_22 = document.createElement('SPAN');
            app_20.appendChild(app_22);

            var app_23 = document.createTextNode((new String("PayTM")));
            app_22.appendChild(app_23);

            var app_26 = document.createElement('LI');
            app_1.appendChild(app_26);

            var app_27 = document.createElement('IMG');
            app_27.setAttribute('src', 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN');
            app_26.appendChild(app_27);

            var app_28 = document.createElement('SPAN');
            app_26.appendChild(app_28);

            var app_29 = document.createTextNode((new String("WhatsApp")));
            app_28.appendChild(app_29);

            var app_32 = document.createElement('LI');
            app_1.appendChild(app_32);

            var app_33 = document.createElement('IMG');
            app_33.setAttribute('src', 'https://evote.co.in/img/evote-logo.png');
            app_32.appendChild(app_33);

            var app_34 = document.createElement('SPAN');
            app_32.appendChild(app_34);

            var app_35 = document.createTextNode((new String("eVote")));
            app_34.appendChild(app_35);

            var app_36 = document.createElement('LI');
            app_1.appendChild(app_36);

            var app_37 = document.createElement('IMG');
            app_37.setAttribute('src', 'https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc=w240-h480-rw');
            app_36.appendChild(app_37);

            var app_38 = document.createElement('SPAN');
            app_36.appendChild(app_38);

            var app_39 = document.createTextNode((new String("Chrome")));
            app_38.appendChild(app_39);

            container.appendChild(app_1);

            var heading = document.createElement( 'p' );
            heading.innerText = 'Storage :';
            container.appendChild(heading);

            var node_1 = document.createElement('DIV');
            node_1.setAttribute('class', 'storage-box');

            var node_2 = document.createElement('P');
            node_2.setAttribute('class', 'amount');
            node_1.appendChild(node_2);

            var node_3 = document.createElement('B');
            node_2.appendChild(node_3);

            var node_4 = document.createTextNode((new String("815 GB")));
            node_3.appendChild(node_4);

            var node_5 = document.createElement('DIV');
            node_5.setAttribute('class', 'storage-bar');
            node_1.appendChild(node_5);

            var node_6 = document.createElement('DIV');
            node_6.setAttribute('class', 'range');
            node_1.appendChild(node_6);

            var node_7 = document.createElement('SPAN');
            node_7.setAttribute('class', 'min');
            node_6.appendChild(node_7);

            var node_8 = document.createTextNode((new String("0 GB")));
            node_7.appendChild(node_8);

            var node_9 = document.createElement('SPAN');
            node_9.setAttribute('class', 'max');
            node_6.appendChild(node_9);

            var node_10 = document.createTextNode((new String("1000 GB")));
            node_9.appendChild(node_10);

            container.appendChild(node_1);
           

        });

        option_class_4_2.addEventListener( 'click', () => {

            window.location.assign( '../../Home_Screen.html?open_files=true' );

        });


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

    var AppNames = ['iMobile_Pay', 'PayTM', 'WhatsApp', 'Tata_Play', 'eVote', 'Family_Link', 'Chrome'];
    var AppLogos = [
        
        'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg',

        'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs', 

        'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',

        'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8',

        'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',

        'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw',

        'https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc=w240-h480-rw'

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

            return give_alert( 'The App is not of My Phone V.2', () => {}); // Temporary...

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

        button.addEventListener( 'click', ( event ) => {

            Connect_to_Wifi( event.target );

        });

        li.appendChild( i );
        li.appendChild( span );
        li.appendChild( button );

        Wifi_Box.appendChild( li );

    };

};

function Connect_to_Wifi( Wifi_Name ) {

    console.log( Wifi_Name.id );

    Wifi_Name.innerHTML = 'Connected';

    return give_alert( 'The Wifi ' + Wifi_Name.id + ' is Connected Successfully ! ', () => {});

};