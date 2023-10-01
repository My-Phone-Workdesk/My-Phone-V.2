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

    File_Explorer.className = 'fa-solid fa-folder-user';
    File_Explorer.title = 'File Explorer -- System App';

    //Clicking on App Icons -->

};