// Imported Functions From File Explorer ==>

import { Database } from "../Data_Resources/Database.js";

import { List_Data } from "./Apps/File_Explorer.js";

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Home_Screen.html' ) ) { Get_User_Data(); };

};

function Get_User_Data() {

    if ( sessionStorage.getItem( 'Files' ) == null ) {

        Database.Read_Data( 'Files', 'Files' );

        setTimeout( () => { Take_Cloud_Files_Data(); },1000 );

    } else { return Load_Home_Screen(); };

    function Take_Cloud_Files_Data() {

        if ( sessionStorage.getItem( 'Files' ) == null ) {
            
            setTimeout( () => {

                return Take_Cloud_Files_Data();

            },2000 );
        
        } else { return Load_Home_Screen(); };

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

    const Current_User_Data = Extract_Current_User_Details();

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

    File_Explorer.addEventListener( 'click', List_Data );

};