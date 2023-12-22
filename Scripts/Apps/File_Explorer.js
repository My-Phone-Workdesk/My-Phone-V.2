// Imported Functions From Database ==>

import { Database } from "../../Data_Resources/Database.js";

import { Run_Function } from 'https://lalacoder.github.io/Modules/Module_for_JS.js';

// Real Script Starts from Below ==>

function List_Data() {

    document.body.innerHTML = '';

    document.body.style.cursor = 'Progress';

    document.body.addEventListener( 'contextmenu', Create_New );

    const User_ID = localStorage.getItem( 'Amount_MB' );

    var User_Data = sessionStorage.getItem( 'Data' );
    User_Data = JSON.parse( User_Data );
    User_Data = User_Data[ User_ID ];

    var User = User_Data[ 'User' ];

    var tasks = 0; var view = 'normal';

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

        const imported_data = Extract_Current_User_Details();

        var Files_Data = imported_data[ 1 ];

        if ( ( Files_Data[ imported_data[ 0 ] ][ 'Data' ] === 'No Data' ) ) {

            return alert( 'Your User has No Data... ' + 
            'Please Contact My Phone V.2 about that from Comment Section!' );

            // This is only for under Development... Will be Replaced Later !
        
        } else {

            Files_Data = Files_Data[ imported_data[ 0 ] ][ 'Data' ];
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

            if ( view == 'normal' ) {

                if ( typeof( Data[ b ] ) === 'object' ) {
                
                    if ( ! ( Array.isArray( Data[ b ] ) ) ) {
                    
                        if ( ! ( Data[ b ][ 'Hidden' ] == 'true' ) ) {
                        
                            File_or_Folder = document.createElement( 'i' );

                            Show_Data();

                        };
                    
                    } else {

                        File_or_Folder = document.createElement( 'i' );

                        Show_Data();

                    };

                };

            } else if ( view == 'hidden' ) {

                File_or_Folder = document.createElement( 'i' );

                Show_Data();

            };
            
            function Show_Data() {

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
    
                    });
                    
                    if ( ! ( No_Data ) ) {
    
                        File_or_Folder.addEventListener( 'contextmenu', ( event ) => {
    
                            Open_Dialog_Box( event.target.id );
        
                        });
    
                    };
                
                } else if ( typeof( Data[ b ] ) === 'object' ) {
                    
                    File_or_Folder.className = 'fa-solid fa-file';
                    
                    var span = document.createElement( 'span' );
    
                    if ( Data[ b ][ 'Name' ] == undefined ) { // Doubt on its Looping of evry file...
    
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

            if ( view == 'normal' ) {

                if ( typeof( Data[ b ] ) === 'object' ) {
                
                    if ( ! ( Array.isArray( Data[ b ] ) ) ) {
                    
                        if ( ! ( Data[ b ][ 'Hidden' ] == 'true' ) ) {
                        
                            File_or_Folder = document.createElement( 'i' );

                            Show_Data();

                        };
                    
                    } else {

                        File_or_Folder = document.createElement( 'i' );

                        Show_Data();

                    };

                };

            } else if ( view == 'hidden' ) {

                File_or_Folder = document.createElement( 'i' );

                Show_Data();

            };
            
            function Show_Data() {

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

        };

    }; function Open_Dialog_Box( id ) {

        id = parseFloat( id ); tasks = 1;

        let Dialog_Box = document.createElement( 'div' );
        Dialog_Box.style.width = '76vw';
        Dialog_Box.style.height = '60vh';
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
        Dialog_Box.style.paddingTop = '10vh';
        Dialog_Box.style.paddingBottom = '2vh';

        Dialog_Box.addEventListener( 'dblclick', () => {

            document.body.removeChild( Dialog_Box );
            Dialog_Box.remove(); return tasks = 0;

        });

        function Update_Services( Service_Data ) {

            const imported_data = Extract_Current_User_Details();

            const cell = Database.Json.Stringify_Column( 'Data', 'Files' ) 
            + ( imported_data[ 0 ] + 2 );

            Database.Update_Data( 'Files', cell, Service_Data );

            var Overall_Files = imported_data[ 1 ];

            Overall_Files[ imported_data[ 0 ] ][ 'Data' ] = Service_Data;

            Overall_Files = JSON.stringify( Overall_Files );

            sessionStorage.setItem( 'Files', Overall_Files );

        };
        
        const check = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
        
        if ( Array.isArray( check[ id ] ) ) {

            if ( ! ( check[ id ][ 0 ].toLowerCase().includes( 'drive' ) ) ) {

                Create_Option( Dialog_Box, 'Rename This Folder', Rename_Objects );
                Create_Option( Dialog_Box, 'Delete This Folder', Delete_Objects );

                Create_Option( Dialog_Box, 'Copy This Folder to a New Location', () => { Copy_Data( 'Copy' ); });
                Create_Option( Dialog_Box, 'Move This Folder to a New Location', Move_Data );
                
                Create_Option( Dialog_Box, 'Edit Properties of This Folder', () => { Property_Panel( 'Folder' ); });
                
            } else {

                Create_Option( Dialog_Box, 'Rename This Drive', Rename_Objects );

                Create_Option( Dialog_Box, 'Edit Properties of This Drive', () => { Property_Panel( 'Drive' ); });

                Dialog_Box.style.height = '16vh';
                Dialog_Box.style.paddingTop = '10vh';
                Dialog_Box.style.top = '35vh';

            };
            
        } else if ( typeof( check[ id ] ) === 'object' ) {

            Create_Option( Dialog_Box, 'Rename This File', Rename_Objects );
            Create_Option( Dialog_Box, 'Delete This File', Delete_Objects );

            Create_Option( Dialog_Box, 'Copy This File to a New Location', () => { Copy_Data( 'Copy' ); });
            Create_Option( Dialog_Box, 'Move This File to a New Location', Move_Data );

            Create_Option( Dialog_Box, 'Edit Properties of This File', () => { Property_Panel( 'File' ); });

        };
        
        document.body.appendChild( Dialog_Box );

        function Rename_Objects() {

            var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
            const Data = Old_Data[ id ];

            if ( Array.isArray( Data ) ) {

                if ( Data[ 0 ].toLowerCase().includes( 'drive' ) ) {

                    var new_name; do { new_name = prompt( 'Rename this Drive as...' );

                    if ( new_name == null ) {
                    
                        document.body.removeChild( Dialog_Box );
                        Dialog_Box.remove(); return tasks = 0;

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
                        Dialog_Box.remove(); return tasks = 0;

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
                    Dialog_Box.remove(); return tasks = 0;

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

        }; function Create_Option( type, option, work ) {

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
            
            type.appendChild( Rename );

            return Rename;

        }; function Delete_Objects() {

            var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
            const Data = Old_Data[ id ];

            if ( Array.isArray( Data ) ) {

                var Sure = confirm( 'Are you Sure to Permanently Delete this Folder ?' + '\n'
                + '\n' + '( Note : You Cannot be able to backup this Folder again and All ' +
                'your sub folders and files in it will be Permanently Deleted ! )' + '\n' );

                if ( Sure ) {

                    Permanently_Delete();

                    alert( 'The Folder Successfully Deleted ! ' );

                    document.body.removeChild( Dialog_Box );
                    Dialog_Box.remove(); tasks = 0;

                    return Data_Verification();

                };

            } else if ( typeof( Data ) === 'object' ) {

                var Sure = confirm( 'Are you Sure to Permanently Delete this File ?' + '\n'
                + '\n' + '( Note : You Cannot be able to backup this File again ! )' + '\n' );

                if ( Sure ) {

                    Permanently_Delete();

                    alert( 'The File Successfully Deleted ! ' );

                    document.body.removeChild( Dialog_Box );
                    Dialog_Box.remove(); tasks = 0;

                    return Data_Verification();

                };

            }; function Permanently_Delete() {

                Old_Data = Run_Function.array.RAPEFA( Old_Data, id );

                const C_F_L = JSON.parse( sessionStorage.getItem( 'Files_Current_Folder_location' ) );

                const imported_data = Extract_Current_User_Details();

                var Overall_Files = imported_data[ 1 ];

                var Current_User_Files_Data = JSON.parse(

                    Database.Json.Files_Method(

                        ( Overall_Files[ imported_data[ 0 ] ][ 'Data' ] ).toString()

                    )

                ); var b = null;

                for ( var a = 0; a < C_F_L.length - 1; a++ ) {

                    b = Current_User_Files_Data[ C_F_L[ a ] ];
                    
                }; if ( b != null ) {

                    b[ C_F_L[ C_F_L.length - 1 ] ] = Old_Data;

                } else { Current_User_Files_Data[ C_F_L[ C_F_L.length - 1 ] ] = Old_Data; };

                Old_Data = JSON.stringify( Current_User_Files_Data );

                Old_Data = Database.Json.Files_Method( Old_Data );

                return Update_Services( Old_Data );

            };

        }; function Copy_Data( advance ) {

            const new_location = prompt( '\n' + 'You want to ' + advance + ' this File/Folder to...' +
            '\n' + '\n' + 'New Location -->' + '\n' );

            if ( new_location == null ) {

                return null;

            } else if ( new_location.includes( '//' ) ) {

                const read_location = new_location.split( '//' );

                const imported_data = Extract_Current_User_Details();

                var current_location = imported_data[ 1 ];

                current_location = current_location[ imported_data[ 0 ] ][ 'Data' ];
                current_location = current_location.toString();
                current_location = Database.Json.Files_Method( current_location );
                current_location = JSON.parse( current_location );

                var user_data = current_location;

                for ( var a = 0; a < read_location.length; a++ ) {

                    var found_status = false;

                    for ( var b = 0; b < current_location.length; b++ ) {

                        if ( Array.isArray( current_location ) ) {

                            if ( Array.isArray( current_location[ b ] ) ) {

                                if (

                                    current_location[b][0].toLowerCase() == read_location[a].toLowerCase()

                                ) {

                                    current_location = current_location[ b ];

                                    b = current_location.length; found_status = true;

                                };

                            };

                        } else if ( advance == 'Copy' ) {

                            return alert( 'You cannot Copy a File/Folder into a File...!!!' );

                        } else {

                            return alert( 'You cannot Move a File/Folder into a File...!!!' );

                        };

                    }; if ( found_status == false ) {

                        return alert( 'This Location is not Found !' );

                    };

                }; // The Location Found Successfully 👍 ==>

                // Accessing the File/Folder to Copy...

                var Files_Current_Folder_location = sessionStorage.getItem( 'Files_Current_Folder_location' );
                Files_Current_Folder_location = JSON.parse( Files_Current_Folder_location );

                current_location = user_data;

                for ( var c = 0; c < Files_Current_Folder_location.length; c++ ) {

                    current_location = current_location[ Files_Current_Folder_location[ c ] ];

                }; current_location = current_location[ id ];

                // Now Accessing the New Location...

                var final_data = user_data;

                for ( var d = 0; d < read_location.length; d++ ) {

                    for ( var e = 0; e < user_data.length; e++ ) {

                        if ( Array.isArray( user_data[ e ] ) ) {

                            if ( user_data[ e ][ 0 ].toLowerCase() == read_location[ d ].toLowerCase() ) {

                                user_data = user_data[ e ];

                            };

                        };

                    };

                }; // Now Coping the Final Data...

                user_data.push( current_location );

                if ( advance == 'Copy' ) {

                    final_data = JSON.stringify( final_data );
                    final_data = Database.Json.Files_Method( final_data );

                    Update_Services( final_data );

                    alert( 'The File/Folder Copied Successfully 👍' );

                    document.body.removeChild( Dialog_Box );
                    Dialog_Box.remove(); tasks = 0;

                    return Data_Verification();

                } else { return [ final_data, Files_Current_Folder_location, id ]; };

            } else {

                return alert( 'The Location is not Formatted... It should be formatted before use !!' );

            };

        }; function Move_Data() {

            var action_data = Copy_Data( 'Move' );

            if ( action_data == null ) { return null; };

            setTimeout( () => {

                var data = action_data[ 0 ];
                var final_data = data;

                const Files_Current_Folder_location = action_data[ 1 ];
                const id = action_data[ 2 ];

                for ( var a = 0; a < Files_Current_Folder_location.length; a++ ) {

                    data = data[ Files_Current_Folder_location[ a ] ];

                }; data.splice( id, 1 );

                final_data = JSON.stringify( final_data );
                final_data = Database.Json.Files_Method( final_data );

                Update_Services( final_data );

                alert( 'The File/Folder Moved Successfully 👍' );

                document.body.removeChild( Dialog_Box );
                Dialog_Box.remove(); tasks = 0;

                return Data_Verification();

            }, 1000 );

        }; function Property_Panel( data_set_type ) {

            var Properties_Panel = Dialog_Box.cloneNode( true );

            document.body.appendChild( Properties_Panel );

            document.body.removeChild( Dialog_Box ); Dialog_Box.remove();

            var Remove_Extra_Clone = Properties_Panel.childNodes;

            const count = Remove_Extra_Clone.length;

            for ( var a = 0; a < count; a++ ) {

                Remove_Extra_Clone[ 0 ].remove();

            }; var Old_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );
            
            const Data = Old_Data[ id ];
            
            if ( data_set_type == 'File' ) {

                Create_Option( Properties_Panel, 'File Name : ' + Data[ 'Name' ], () => {});
                Create_Option( Properties_Panel, 'File Extention : ' + Data[ 'Extention' ], () => {});

                Create_Option(
                    
                    Properties_Panel, 'File Full Name : ' + Data[ 'Name' ] + '.' + Data[ 'Extention' ],
                    () => {}
                    
                );

                var check_box = document.createElement( 'input' );
                check_box.type = 'checkbox';
                
                if ( Data[ 'Hidden' ] == 'true' ) {

                    check_box.checked = true;

                } else {

                    check_box.checked = false;

                };

                check_box.style.marginLeft = '35px';
                check_box.style.width = '20px';
                check_box.style.height = '20px';
                check_box.style.marginBottom = '20px';

                var hidden = Create_Option( Properties_Panel, 'Hidden File', () => {

                    if ( check_box.checked == true ) {

                        check_box.checked = false;

                    } else {

                        check_box.checked = true;

                    };

                }); hidden.appendChild( check_box );

            } else if ( data_set_type == 'Folder' ) {

                Create_Option( Properties_Panel, 'Folder Name : ' + Data[ 0 ], () => {});

            } else if (data_set_type == 'Drive' ) {

                Properties_Panel.style.height = '60vh';
                Properties_Panel.style.top = '10vh';

                Create_Option( Properties_Panel, 'Drive Name : ' + Data[ 0 ], () => {});

            } else {

                alert( 'Sorry ! An Unexpected Error Occured...' );

                document.body.removeChild( Properties_Panel );
                Properties_Panel.remove(); return tasks = 0;

            }; setTimeout( () => {

                Create_Option( Properties_Panel, 'Close ❌', () => {

                    if ( data_set_type == 'File' ) {

                        if ( check_box.checked == true ) {

                            if ( ! ( Data[ 'Hidden' ] == 'true' ) ) {

                                return Apply_Hidden_File_Changes( 'true' );

                            };

                        } else {

                            if ( ! ( Data[ 'Hidden' ] == 'false' ) ) {

                                return Apply_Hidden_File_Changes( 'false' );

                            };

                        };

                        function Apply_Hidden_File_Changes( change ) {

                            const Current_Location = JSON.parse(
                                    
                                sessionStorage.getItem( 'Files_Current_Folder_location' )
                                
                            );

                            const imported_data = Extract_Current_User_Details();
                            var Overall_Files = imported_data[ 1 ];

                            var User_Files = Overall_Files[ imported_data[ 0 ] ][ 'Data' ];
                            User_Files = Database.Json.Files_Method( User_Files );
                            User_Files = JSON.parse( User_Files );

                            var File_to_Update = User_Files;

                            for ( var b = 0; b < Current_Location.length; b++ ) {

                                File_to_Update = File_to_Update[ Current_Location[ b ] ];

                            }; Data[ 'Hidden' ] = change;

                            File_to_Update[ id ] = Data;

                            User_Files = JSON.stringify( User_Files );
                            User_Files = Database.Json.Files_Method( User_Files );

                            Update_Services( User_Files );

                            document.body.removeChild( Properties_Panel );
                            Properties_Panel.remove();

                            return Data_Verification();

                        };
                    
                    };

                    document.body.removeChild( Properties_Panel );
                    Properties_Panel.remove();
    
                });

            }, 1000 );

        };

    }; function Create_New() {

        let Option_Box = null;

        if ( tasks == 1 ) {

            if ( Option_Box == null || Option_Box == undefined ) {

                return null;

            };

            document.body.removeChild( Option_Box );
            return Option_Box.remove();

        };

        Option_Box = document.createElement( 'div' );
        Option_Box.style.width = '42vw';
        Option_Box.style.height = '16vh';
        Option_Box.style.position = 'absolute';
        Option_Box.style.left = '25vw';
        Option_Box.style.top = '40vh';
        Option_Box.style.backgroundColor = '#ffffff';
        Option_Box.style.display = 'flex';
        Option_Box.style.alignItems = 'center';
        Option_Box.style.justifyContent = 'space-evenly';
        Option_Box.style.flexWrap = 'wrap';
        Option_Box.style.borderColor = 'blue';
        Option_Box.style.borderStyle = 'solid';
        Option_Box.style.borderWidth = '10px';
        Option_Box.style.paddingLeft = '1.5vw';
        Option_Box.style.paddingRight = '1.5vw';
        Option_Box.style.paddingTop = '1.5vh';
        Option_Box.style.paddingBottom = '1.5vh';

        Option_Box.addEventListener( 'dblclick', () => {

            document.body.removeChild( Option_Box );
            Option_Box.remove();

        }); document.body.appendChild( Option_Box );

        Create_Sub_Options( 'Create New File Here', File );
        Create_Sub_Options( 'Create New Folder Here', Folder );
        Create_Sub_Options( 'Current View : ' + view, Change_View );

        function Create_Sub_Options( option, work ) {

            let Sub_Option = document.createElement( 'div' );
            Sub_Option.innerHTML = option;
            Sub_Option.style.borderColor = '#000000';
            Sub_Option.style.borderStyle = 'solid';
            Sub_Option.style.borderWidth = '5px';
            Sub_Option.style.height = '4vh';
            Sub_Option.style.width = '15vw';
            Sub_Option.style.textAlign = 'center';
            Sub_Option.style.fontSize = '1.3rem';
            Sub_Option.style.fontWeight = '600';
            Sub_Option.style.cursor = 'pointer';
            Sub_Option.style.flexBasis = '40%';

            Sub_Option.addEventListener( 'click', work );
            
            Option_Box.appendChild( Sub_Option );

            return Sub_Option;

        }; function File() {

            return alert( 'Sorry ! Under Development... May be developed tomorrrow' );

        }; function Folder() {

            return alert( 'Sorry ! Under Construction... May be developed till tomorrow' );

            const Current_Location = JSON.parse( sessionStorage.getItem( 'Files_Current_Folder_location' ) );
            const Current_Data = JSON.parse( sessionStorage.getItem( 'Files_User_Data' ) );

            const imported_data = Extract_Current_User_Details();
            
            var Current_User_Data = imported_data[ 1 ][ imported_data[ 0 ] ][ 'Data' ];

            if ( Current_Location.length == 0 ) {

                return alert( 'Sorry ! But you cannot Create a Folder in the Drive Section ! ' );

            } else {

                var Added_Data = Current_User_Data;

                for ( var a = 0; a < Current_Location.length; a++ ) {

                    Added_Data = Added_Data[ Current_Location[ a ] ];

                }; const new_folder_name = prompt(

                    '\n' + "What will be your New Folder's Name ? " + '\n',

                    'New Folder'

                );
                
                for ( var b = 0; b < Current_Data.length; b++ ) {

                    if ( Array.isArray( Current_Data[ b ] ) ) {

                        if ( Current_Data[ b ][ 0 ].includes( 'New Folder' ) ) {

                            if ( Current_Data[ b ][ 0 ] == 'New Folder' ) {

                                if ( assignment_number == 0 ) {

                                    assignment_number = 1;

                                };

                            } else {};

                        };

                    };

                };

            };

        }; function Change_View() {

            if ( view == 'normal' ) { view = 'hidden'; } else { view = 'normal'; };

            document.body.removeChild( Option_Box ); Option_Box.remove();

            return Create_New();

        };

    }; function Extract_Current_User_Details() {

        var Overall_Files = JSON.parse( sessionStorage.getItem( 'Files' ) );

        var All_Usernames = new Array();

        for ( var a = 0; a < Overall_Files.length; a++ ) {
            
            All_Usernames.push( Overall_Files[ a ][ 'User' ] );
        
        };

        return [ All_Usernames.indexOf( User ), Overall_Files ];

    };

};

export { List_Data };