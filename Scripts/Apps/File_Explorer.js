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

        var Name_Data = true;

        for ( var b = 0; b < Data.length; b++ ) {

            Name_Data = true;

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.id = b;
                
                var span = document.createElement( 'span' );
                span.innerHTML = Data[ b ][ 0 ];

                File_or_Folder.appendChild( span );
                
                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.target.id );

                }); File_or_Folder.addEventListener( 'contextmenu', Open_Dialog_Box );
            
            } else if ( typeof( Data[ b ] ) === 'object' ) {
                
                File_or_Folder.className = 'fa-solid fa-file';
                
                var span = document.createElement( 'span' );
                span.innerHTML = Data[ b ][ 'Name' ];

                File_or_Folder.appendChild( span );

                File_or_Folder.addEventListener( 'contextmenu', Open_Dialog_Box );
            
            } else { Name_Data = false; };
            
            if ( Name_Data === true ) { document.body.appendChild( File_or_Folder ); };

        };

    }; function Location_Folder( id ) {

        const Old_Data = JSON.parse( sessionStorage.getItem( 'Files_temp_Data' ) );

        const Data = Old_Data[ id ];

        sessionStorage.setItem( 'Files_temp_Data', JSON.stringify( Data ) );

        document.body.innerHTML = '';

        var Name_Data = true;

        for ( var b = 0; b < Data.length; b++ ) {

            Name_Data = true;

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.id = b;
                
                var span = document.createElement( 'span' );
                span.innerHTML = Data[ b ][ 0 ];

                File_or_Folder.appendChild( span );
                
                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.target.id );

                }); File_or_Folder.addEventListener( 'contextmenu', Open_Dialog_Box );
            
            } else if ( typeof( Data[ b ] ) === 'object' ) {
                
                File_or_Folder.className = 'fa-solid fa-file';
                
                var span = document.createElement( 'span' );
                span.innerHTML = Data[ b ][ 'Name' ];

                File_or_Folder.appendChild( span );

                File_or_Folder.addEventListener( 'contextmenu', Open_Dialog_Box );
            
            } else { Name_Data = false; };

            if ( Name_Data === true ) { document.body.appendChild( File_or_Folder ); };

        };

    }; function Open_Dialog_Box() {

        let Dialog_Box = document.createElement( 'div' );
        Dialog_Box.style.width = '76vw';
        Dialog_Box.style.height = '76vh';
        Dialog_Box.style.position = 'absolute';
        Dialog_Box.style.left = '10vw';
        Dialog_Box.style.top = '10vh';
        Dialog_Box.style.backgroundColor = '#ffffff';
        Dialog_Box.style.display = 'flex';
        Dialog_Box.style.alignItems = 'top';
        Dialog_Box.style.justifyContent = 'space-evenly';
        Dialog_Box.style.flexWrap = 'wrap';
        Dialog_Box.style.borderColor = 'red';
        Dialog_Box.style.borderStyle = 'solid';
        Dialog_Box.style.borderWidth = '10px';
        Dialog_Box.style.paddingLeft = '2vw';
        Dialog_Box.style.paddingRight = '2vw';
        Dialog_Box.style.paddingTop = '2vh';
        Dialog_Box.style.paddingBottom = '2vh';

        Dialog_Box.addEventListener( 'dblclick', () => {

            document.body.removeChild( Dialog_Box );
            Dialog_Box.remove();

        });

        Create_Option( 'Rename File/Folder', Rename_Objects );
        Create_Option( 'Delete File/Folder', Delete_Objects );
        
        document.body.appendChild( Dialog_Box );

        function Rename_Objects() {

            alert( 'The File/Folder Renamed ! ' );

        }; function Create_Option( option, work ) {

            let Rename = document.createElement( 'div' );
            Rename.innerHTML = option;
            Rename.style.borderColor = '#000000';
            Rename.style.borderStyle = 'solid';
            Rename.style.borderWidth = '5px';
            Rename.style.height = '4vh';
            Rename.style.width = '15vw';
            Rename.style.textAlign = 'center';
            Rename.style.fontSize = '1.3rem';
            Rename.style.fontWeight = '600';
            Rename.style.cursor = 'pointer';
            Rename.style.flexBasis = '40%';

            Rename.addEventListener( 'click', work );
            
            Dialog_Box.appendChild( Rename );

        }; function Delete_Objects() {

            alert( 'The File/Folder Successfully Deleted ! ' );

        };

    };

};

export { List_Data };