// Imported Functions From Database ==>

import { Database } from "../../Data_Resources/Database.js";

// Real Script Starts from Below ==>

function List_Data() {

    document.body.innerHTML = '';

    document.body.style.cursor = 'Progress';

    const User_ID = localStorage.getItem( 'Amount_MB' );

    var User_Data = sessionStorage.getItem( 'Data' );
    User_Data = JSON.parse( User_Data );
    User_Data = User_Data[ User_ID ];

    var User = User_Data[ 'User' ];

    Take_Cloud_Files_Data();

    function Take_Cloud_Files_Data() {

        if ( sessionStorage.getItem( 'Files' ) == null ) { Database.Read_Data( 'Files', 'Files' ); };

        setTimeout( () => {

            if ( sessionStorage.getItem( 'Files' ) == null ) { Take_Cloud_Files_Data(); }
            else { Data_Verification(); };

        },2000 );

    }; function Data_Verification() {

        document.body.style.cursor = 'Default';

        var Files_Data = sessionStorage.getItem( 'Files' );
        Files_Data = JSON.parse( Files_Data );

        var All_Usernames = new Array();
        
        for ( var a = 0; a < Files_Data.length; a++ ) { All_Usernames.push( Files_Data[ a ][ 'User' ] ); };

        if ( All_Usernames.indexOf( User ) == -1 ) {

            alert( 'Your User has No Data... Please Contact My Phone V.2 about that from Comment Section ! ' );
        
        } else {

            Files_Data = Files_Data[ All_Usernames.indexOf( User ) ][ 'Data' ];
            Files_Data = Files_Data.toString();
            Files_Data = Database.Json.Files_Method( Files_Data );
            Files_Data = JSON.parse( Files_Data );
            Arrange_Files_and_Folders( Files_Data );

        };

    }; function Arrange_Files_and_Folders( Data ) {

        sessionStorage.setItem( 'Files_temp_Data', JSON.stringify( Data ) );

        for ( var b = 0; b < Data.length; b++ ) {

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.id = b;
                
                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.clientX, event.clientY );

                });
            
            } else { File_or_Folder.className = 'fa-sharp fa-solid fa-file'; }

            document.body.appendChild( File_or_Folder );

        };

    }; function Location_Folder( mouse_X, mouse_Y ) {

        const Click_Folder = 0; // This is not fully Solved...

        var All = document.body.querySelectorAll( 'i' );

        var Data = new Array();
        
        for ( var c = 0; c < All.length; c++ ) {

            if ( All[ c ].className == 'fa-solid fa-folders' ) { Data.push( All[ c ] ); };

        }; var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_temp_Data' ) );

        Data = Old_Data[ All.indexOf( Data[ Click_Folder ] ) ];

        document.body.innerHTML = '';

        for ( var b = 0; b < Data.length; b++ ) {

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.setAttribute( 'name', Data[ b ] );

                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.clientX, event.clientY );

                });
            
            } else { File_or_Folder.className = 'fa-sharp fa-solid fa-file'; }

            document.body.appendChild( File_or_Folder );

        };

    };

};

export { List_Data };