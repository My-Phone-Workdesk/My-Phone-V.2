// Imported Functions From Database ==>

import { Database } from "../../Data_Resources/Database.js";

import { Run_Function } from 'https://lalacoder.github.io/Modules/Module_for_JS.js';

// Real Script Starts from Below ==>

function List_Data() {

    document.body.innerHTML = '';

    document.body.style.cursor = 'Progress';

    const User_ID = localStorage.getItem( 'Amount_MB' );

    var User_Data = sessionStorage.getItem( 'Data' );
    User_Data = JSON.parse( User_Data );
    User_Data = User_Data[ User_ID ];

    var User = User_Data[ 'User' ];

    if ( sessionStorage.getItem( 'Files' ) == null ) {

        Database.Read_Data( 'Files', 'Files' );

        setTimeout( () => { Take_Cloud_Files_Data(); },1000 );

    } else { Data_Verification(); };
    

    function Take_Cloud_Files_Data() {

        if ( sessionStorage.getItem( 'Files' ) == null ) {
            
            setTimeout( () => {

                return Take_Cloud_Files_Data();

            },2000 );
        
        } else { return Data_Verification(); };

    }; function Data_Verification() {

        document.body.style.cursor = 'Default';

        var Files_Data = JSON.parse( sessionStorage.getItem( 'Files' ) );

        if ( ( Files_Data[ User_ID ]["Data"] === "No Data" ) ) {

            return alert( 'Your User has No Data... ' + 
            'Please Contact My Phone V.2 about that from Comment Section!' );

            // This is only for under Development... Will be Replaced Later !
        
        } else {

            var All_Usernames = new Array();
        
            for ( var a = 0; a < Files_Data.length; a++ ) { All_Usernames.push( Files_Data[ a ][ 'User' ] ); };

            Files_Data = Files_Data[ All_Usernames.indexOf( User ) ][ 'Data' ];
            Files_Data = Files_Data.toString();
            Files_Data = Database.Json.Files_Method( Files_Data );
            Files_Data = JSON.parse( Files_Data );

            return Arrange_Files_and_Folders( Files_Data );

        };

    }; function Arrange_Files_and_Folders( Data ) {

        sessionStorage.setItem( 'Files_User_Data', JSON.stringify( Data ) );
        sessionStorage.setItem( 'Files_Current_Folder_location', JSON.stringify( new Array( 0 ) ) );

        var Name_Data = true; document.body.innerHTML = ''; var No_Data = false;

        for ( var b = 0; b < Data.length; b++ ) {

            Name_Data = true; No_Data = false;

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.id = b;
                
                var span = document.createElement( 'span' );

                if ( Data[ b ][ 0 ] == undefined ) {

                    span.innerHTML = "No Data, double click icon to go back";
                    File_or_Folder.className = "fa-solid fa-empty-set";

                    File_or_Folder.addEventListener( 'dblclick', ( event ) => {

                        location.reload( event.target.id );

                    }); No_Data = true;

                } else {

                    if ( Data[ b ][ 0 ].toLowerCase().includes( "drive" ) ) {

                        File_or_Folder.className = 'fa-duotone fa-hard-drive';

                    }; span.innerHTML = Data[ b ][ 0 ].toString();

                }; File_or_Folder.appendChild( span );
                
                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.target.id );

                }); if ( ! ( No_Data ) ) {

                    File_or_Folder.addEventListener( 'contextmenu', ( event ) => {

                        Open_Dialog_Box( event.target.id );
    
                    });

                };
            
            } else if ( typeof( Data[ b ] ) === 'object' ) {
                
                File_or_Folder.className = 'fa-solid fa-file';
                
                var span = document.createElement( 'span' );

                if ( Data[ b ][ 'Name' ] == undefined ) {

                    span.innerHTML = "No Data, double click icon to go back";
                    File_or_Folder.className="fa-solid fa-empty-set";

                    File_or_Folder.addEventListener( 'dblclick', ( event ) => {

                        location.reload( event.target.id );

                    }); No_Data = true;

                } else {

                    span.innerHTML = Data[ b ][ 'Name' ].toString();
                    File_or_Folder.id = b;

                }; File_or_Folder.appendChild( span );

                if ( ! ( No_Data ) ) {

                    File_or_Folder.addEventListener( 'contextmenu', ( event ) => {

                        Open_Dialog_Box( event.target.id );
    
                    });

                };
            
            } else { Name_Data = false; };
            
            if ( Name_Data === true ) { document.body.appendChild( File_or_Folder ); };

        };

    }; function Location_Folder( id ) {

        var Files_Current_Folder_location = sessionStorage.getItem( 'Files_Current_Folder_location' );
        Files_Current_Folder_location = JSON.parse( Files_Current_Folder_location );
        Files_Current_Folder_location.push( parseFloat( id ) );
        Files_Current_Folder_location = JSON.stringify( Files_Current_Folder_location );
        sessionStorage.setItem( 'Files_Current_Folder_location', Files_Current_Folder_location );

        const Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );

        const Data = Old_Data[ id ];

        sessionStorage.setItem( 'Files_User_Data', JSON.stringify( Data ) );

        document.body.innerHTML = '';

        var Name_Data = true; var No_Data = false;

        for ( var b = 0; b < Data.length; b++ ) {

            Name_Data = true; No_Data = false;

            var File_or_Folder = null;

            File_or_Folder = document.createElement( 'i' );
            
            if ( Array.isArray( Data[ b ] ) ) {
                
                File_or_Folder.className = 'fa-solid fa-folders';
                File_or_Folder.id = b;
                
                var span = document.createElement( 'span' );

                if ( Data[ b ][ 0 ] == undefined ) {

                    span.innerHTML = "No Data, double click icon to go back";
                    File_or_Folder.className="fa-solid fa-empty-set";

                    File_or_Folder.addEventListener( 'dblclick', ( event ) => {

                        location.reload( event.target.id ) ;

                    }); No_Data = true;

                } else {

                    if ( Data[ b ][ 0 ].toLowerCase().includes( "drive" ) ) {

                        File_or_Folder.className = 'fa-duotone fa-hard-drive';

                    }; span.innerHTML = Data[ b ][ 0 ].toString();
                
                }; File_or_Folder.appendChild( span );
                
                File_or_Folder.addEventListener( 'click', ( event ) => {

                    Location_Folder( event.target.id );

                }); if ( ! ( No_Data ) ) {

                    File_or_Folder.addEventListener( 'contextmenu', ( event ) => {

                        Open_Dialog_Box( event.target.id );
    
                    });

                };
            
            } else if ( typeof( Data[ b ] ) === 'object' ) {
                
                File_or_Folder.className = 'fa-solid fa-file';
                
                var span = document.createElement( 'span' );

                if ( Data[ b ][ 'Name' ] == undefined ) {

                    span.innerHTML = "No Data, double click icon to go back";
                    File_or_Folder.className="fa-solid fa-empty-set";

                    File_or_Folder.addEventListener( 'dblclick', ( event ) => {

                        location.reload(event.target.id);

                    }); No_Data = true;

                } else {

                    span.innerHTML = Data[ b ][ 'Name' ].toString();
                    File_or_Folder.id = b;

                }; File_or_Folder.appendChild( span );

                if ( ! ( No_Data ) ) {

                    File_or_Folder.addEventListener( 'contextmenu', ( event ) => {

                        Open_Dialog_Box( event.target.id );
    
                    });

                };
            
            } else { Name_Data = false; };

            if ( Name_Data === true ) { document.body.appendChild( File_or_Folder ); };

        };

    }; function Open_Dialog_Box( id ) {

        id = parseFloat( id );

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

        function Update_Services( Service_Data ) {

            var Overall_Files = JSON.parse( sessionStorage.getItem( 'Files' ) );

            var All_Usernames = new Array();

            for ( var a = 0; a < Overall_Files.length; a++ ) {
                
                All_Usernames.push( Overall_Files[ a ][ 'User' ] );
            
            }; const cell = Database.Json.Stringify_Column( 'Data', 'Files' ) 
            + ( All_Usernames.indexOf( User ) + 2 );

            Database.Update_Data( 'Files', cell, Service_Data );

            Overall_Files[ All_Usernames.indexOf( User ) ][ 'Data' ] = Service_Data;

            Overall_Files = JSON.stringify( Overall_Files );

            sessionStorage.setItem( 'Files', Overall_Files );

        };

        Create_Option( 'Rename File/Folder', Rename_Objects );
        Create_Option( 'Delete File/Folder', Delete_Objects );
        
        document.body.appendChild( Dialog_Box );

        function Rename_Objects() {

            var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
            const Data = Old_Data[ id ];

            if ( Array.isArray( Data ) ) {

                if ( Data[ 0 ].toLowerCase().includes( 'drive' ) ) {

                    var new_name; do { new_name = prompt( 'Rename this Drive as...' );

                    if ( new_name == null ) {
                    
                        document.body.removeChild( Dialog_Box );
                        return Dialog_Box.remove();

                    } else if ( new_name.length != 1 ) {

                        alert( 'Drive name must be of an Single Character...' );

                    }; } while ( new_name.length != 1 );

                    for ( var a = 0; a < Old_Data.length; a++ ) {

                        if ( Old_Data[ a ][ 0 ].toLowerCase().includes( 'drive' ) ) {

                            if ( Old_Data[ a ][ 0 ].slice( -2, -1 ).toLowerCase() == new_name.toLowerCase() )
                            
                            { return alert( 'This Drive already exists...' ); };

                        };

                    }; Old_Data[ id ][ 0 ] = 'Drive ' + new_name + ':';

                    Old_Data = JSON.stringify( Old_Data );

                    Old_Data = Database.Json.Files_Method( Old_Data );

                    Update_Services( Old_Data );

                    alert( 'The Drive Renamed Successfully ! ' );

                    return Data_Verification();

                } else {
                    
                    const new_name = prompt( 'Rename this Folder as...' );

                    if ( new_name == null ) {

                        document.body.removeChild( Dialog_Box );
                        return Dialog_Box.remove();

                    } else if ( new_name == '' ) {

                        return alert( 'Folder Name should be atleast a single character...' );

                    } else {

                        for ( var a = 0; a < Old_Data.length; a++ ) {

                            if ( Array.isArray( Old_Data[ a ] ) ) {
    
                                if ( Old_Data[ a ][ 0 ].toLowerCase() == new_name.toLowerCase() )
                                
                                { return alert( 'The Folder with this name already exists...' ); };
    
                            };
    
                        }; Old_Data[ id ][ 0 ] = new_name;

                        Old_Data = JSON.stringify( Old_Data );
                        
                        Old_Data = Database.Json.Files_Method( Old_Data );

                        Update_Services( Old_Data );

                        alert( 'The Folder Renamed Successfully ! ' );

                        return Data_Verification();

                    };

                };

            } else if ( typeof( Data ) === 'object' ) {

                const new_name = prompt( 'Rename this File as...' );

                if ( new_name == null ) {

                    document.body.removeChild( Dialog_Box );
                    return Dialog_Box.remove();

                } else if ( new_name == '' ) {

                    return alert( 'File Name should be atleast a single character...' );

                } else {

                    for ( var a = 0; a < Old_Data.length; a++ ) {

                        if ( typeof( Old_Data[ a ] ) === 'object' ) {

                            if ( Old_Data[ a ][ 'Name' ].toLowerCase() == new_name.toLowerCase() )
                            
                            { return alert( 'The File with this name already exists...' ); };

                        };

                    }; Old_Data[ id ][ 'Name' ] = new_name;

                    Old_Data = JSON.stringify( Old_Data );
                        
                    Old_Data = Database.Json.Files_Method( Old_Data );

                    Update_Services( Old_Data );

                    alert( 'The File Renamed Successfully ! ' );

                    return Data_Verification();

                };

            } else {
                
                alert( 'This File is Corrupted Hence, Cannot be Renamed...!!!' );

                return console.log( typeof( Data ), Data, id );
            
            };

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

            var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
            const Data = Old_Data[ id ];

            if ( Array.isArray( Data ) ) {

                if ( Data[ 0 ].toString().toLowerCase().includes( 'drive' ) ) {

                    return alert( 'You cannot Delete a Drive... To do so go to Disk Management ! ' );

                };

                var Sure = confirm( 'Are you Sure to Permanently Delete this Folder ?' + '\n'
                + '\n' + '( Note : You Cannot be able to backup this Folder again and All ' +
                'your sub folders and files in it will be Permanently Deleted ! )' + '\n' );

                if ( Sure ) {

                    Permanently_Delete();

                    alert( 'The Folder Successfully Deleted ! ' );

                    document.body.removeChild( Dialog_Box );
                    Dialog_Box.remove();

                    return Data_Verification();

                };

            } else if ( typeof( Data ) === 'object' ) {

                var Sure = confirm( 'Are you Sure to Permanently Delete this File ?' + '\n'
                + '\n' + '( Note : You Cannot be able to backup this File again ! )' + '\n' );

                if ( Sure ) {

                    Permanently_Delete();

                    alert( 'The File Successfully Deleted ! ' );

                    document.body.removeChild( Dialog_Box );
                    Dialog_Box.remove();

                    return Data_Verification();

                };

            }; function Permanently_Delete() {

                Old_Data = Run_Function.array.RAPEFA( Old_Data, id );

                const C_F_L = JSON.parse( sessionStorage.getItem( 'Files_Current_Folder_location' ) );

                var Overall_Files = JSON.parse( sessionStorage.getItem( 'Files' ) );

                var All_Usernames = new Array();

                for ( var a = 0; a < Overall_Files.length; a++ ) {
                    
                    All_Usernames.push( Overall_Files[ a ][ 'User' ] );
                
                }; var Current_User_Files_Data = JSON.parse(

                    Database.Json.Files_Method(

                        ( Overall_Files[ All_Usernames.indexOf( User ) ][ 'Data' ] ).toString()

                    )

                ); console.log( Current_User_Files_Data ); var b = null;

                for ( var a = 0; a < C_F_L.length - 1; a++ ) {

                    b = Current_User_Files_Data[ C_F_L[ a ] ];
                    
                }; if ( b != null ) {

                    b[ C_F_L[ C_F_L.length - 1 ] ] = Old_Data;

                } else { Current_User_Files_Data[ C_F_L[ C_F_L.length - 1 ] ] = Old_Data; };

                Old_Data = JSON.stringify( Current_User_Files_Data );

                Old_Data = Database.Json.Files_Method( Old_Data );

                return Update_Services( Old_Data );

            };

        };

    };

};

export { List_Data };