// Imported Functions From File Explorer ==>

import { Database } from "../Data_Resources/Database.js";

import { List_Data } from "./Apps/File_Explorer.js";

import { give_alert } from './Alert.js';

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Home_Screen.html' ) ) {

        var urlparams = new URLSearchParams( window.location.search );

        if ( ( urlparams.get( 'new_app' ) ) != null ) {
            
            return give_alert( ( urlparams.get( 'new_app' ) ) + ' is Installed Successfully ! ', () => {

                return location.assign( './Home_Screen.html' );

            });
        
        };

        if ( ( urlparams.get( 'open_files' ) ) != null ) {

            sessionStorage.setItem( 'remove_para', true );

            return location.assign( './Home_Screen.html' );
        
        };

        if ( ( sessionStorage.getItem( 'remove_para' ) ) != null ) {

            sessionStorage.removeItem( 'remove_para' );

            return List_Data( true );

        };

        return Load_Home_Screen();

    };

};

function Extract_Current_User_Details() {

    const Overall_Files = JSON.parse( sessionStorage.getItem( 'Files' ) );

    var All_Usernames = new Array();

    for ( var a = 0; a < Overall_Files.length; a++ ) {
        
        All_Usernames.push( Overall_Files[ a ][ 'User' ] );
    
    };

    const Data = JSON.parse( sessionStorage.getItem( 'Data' ) );
    const current_user_id = parseFloat( localStorage.getItem( 'Amount_MB' ) );

    var User_Data = Overall_Files[ All_Usernames.indexOf( Data[ current_user_id ][ 'User' ] ) ];
    User_Data = Database.Json.Files_Method( User_Data[ 'Data' ] );

    sessionStorage.setItem( 'Current_User_Data', User_Data );

    return JSON.parse( User_Data );

}; 

function Load_Home_Screen() {

    const User_ID = localStorage.getItem( 'Amount_MB' );

    var User_Data = sessionStorage.getItem( 'Data' );
    User_Data = JSON.parse( User_Data );
    User_Data = User_Data[ User_ID ];

    //Play Store ( System App ) -->

    const play_store = document.body.appendChild( document.createElement('i') );
    play_store.className = "fa-brands fa-google-play";
    play_store.title = "Play Store -- System App";

    //Settings ( System App ) -->

    const settings = document.body.appendChild( document.createElement('i') );
    settings.className = "fa-solid fa-gear";
    settings.title = "Settings -- System App";

    //CMD ( System App for Laptop, Desktop and Notepad ) ==>

    if ( ( User_Data[ 'Device' ] == 'Desktop' ) || ( User_Data[ 'Device' ] == 'Laptop' )
    || ( User_Data[ 'Device' ] == 'Notepad' ) ) {

        const CMD = document.body.appendChild( document.createElement('i') );
    
        CMD.className = "fa-solid fa-rectangle-terminal";
        CMD.title = "CMD -- Command Prompt";

        CMD.addEventListener('click', () => { location.href = "./Apps/CMD/CMD.html"; });

    };

    //File Explorer ( System App ) ==>

    const File_Explorer = document.body.appendChild( document.createElement( 'i' ) );

    File_Explorer.className = 'fa-solid fa-folder-open';
    File_Explorer.title = 'File Explorer -- System App';

    //Clicking on App Icons -->

    play_store.addEventListener( 'click', () => {
        
        location.href = "./Apps/Play_Store/Play_Store.html";
    
    });

    settings.addEventListener( 'click', () => {
        
        location.href = "./Apps/Settings/Settings.html";
    
    });

    File_Explorer.addEventListener( 'click', () => {

        List_Data( true );

    });

    return User_Installed_Apps();

};

function User_Installed_Apps() {

    const AppNames = [ 'iMobile_Pay', 'PayTM', 'WhatsApp', 'Tata_Play', 'eVote', 'Family_Link' ];

    const AppLogos = [
        
        'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg',

        'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs', 

        'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',

        'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8',

        'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',

        'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw'

    ];

    const Current_User_Data = Extract_Current_User_Details();
    const Installed_Apps = Current_User_Data[ 0 ][ 3 ];

    for ( var a = 1; a < Installed_Apps.length; a++ ) {

        var app = new String();

        const naam = Installed_Apps[ a ][ 'Name' ];

        if ( AppNames.indexOf( naam ) > -1 ) {

            app = document.body.appendChild( document.createElement( 'img' ) );
            app.src = AppLogos[ AppNames.indexOf( naam ) ];
            app.id = a;
            app.className = './Apps/' + naam + '/' + naam + '.html';

            app.addEventListener( 'click', ( event ) => {

                return location.assign( event.target.className );
    
            });

        } else {

            app = document.body.appendChild( document.createElement( 'i' ) );

            try {
                
                app.className = Installed_Apps[ a ][ 'Data' ][ 'icon' ];
            
            } catch ( Error ) {

                console.error(
                    
                    'The Installed App ' + Installed_Apps[ a ][ 'Name' ] +
                    ' has No Data or the icon is missing ! '
                    
                );

            };

            app.addEventListener( 'click', ( event ) => {

                var open_ai = sessionStorage.getItem( 'Current_User_Data' );
                open_ai = JSON.parse( open_ai );
    
                var chat_gpt = open_ai[ 0 ][ 3 ][ event.target.id ][ 'Data' ][ 'Script' ];
                chat_gpt = chat_gpt.toString();
                chat_gpt = Database.Json.Files_Method( chat_gpt );
    
                chat_gpt = chat_gpt.split( ',' );
    
                return Open_App( chat_gpt );
    
            });

            app.id = a;
            
        };

        app.title = Installed_Apps[ a ][ 'Name' ] + ' -- Installed App';

    };

};

function Open_App( app_script ) {

    if ( ! ( Array.isArray( app_script ) ) ) {

        return give_alert( '\n' + 'The Script is not coded Well...' + '\n' + '\n' + 'I Think the Coder ' +
        'is Mad Enough to code an app... 😅 May be the Coder is so much selfish ! ' + '\n', () => {});

    };

    document.body.innerHTML = '';

    for ( var a = 0; a < app_script.length; a++ ) {

        Run_Script( app_script[ a ] );

    };

};

function Run_Script( code ) {

    console.log( code );

    document.open();
    document.body.innerHTML += '<br>' + code;
    return document.close();

};