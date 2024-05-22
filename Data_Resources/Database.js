const Server = 'https://script.google.com/macros/s/AKfycbwX4ZQ-GbamVVSyeM0DqOep-6Gh_7Z4hwiCc-j_hs7c43YZ34jG5o7WmugredKCkF2U/exec';

window.onload = () => { if ( location.pathname.includes( '/Load_Data.html' ) ) { return Import_Database(); }; };

function Import_Database() {

    const Storage_Media = [ 'Accounts_Data', 'Data', 'Wifi', 'Files', 'Feedback' ];
    const Media_Memory = [ 'Accounts', 'User_Accounts', 'Wifi_Router', 'Files', 'Feedback' ];

    for ( var a = 0; a < Storage_Media.length; a++ ) {

        if ( sessionStorage.getItem( Storage_Media[ a ] ) == null ) {

            Database.Read_Data( Storage_Media[ a ], Media_Memory[ a ] );

            return Read_Queries( Storage_Media[ a ] );

        };

    };

    localStorage.removeItem( 'Add_User' ); return window.location.assign( '../index.html' );

    function Read_Queries( category ) {

        setTimeout( () => {

            if ( sessionStorage.getItem( category ) == null ) { return Read_Queries( category ); }
            else { return Import_Database(); };

        },1000 );

    };

};

const Database = {

    request_url: Server,

    Send_request: ( data_type, store_data, _arguments_ ) => {

        const request = new XMLHttpRequest();

        request.open( "GET", Database.request_url + '?type=' + data_type + _arguments_ );

        request.onload = () => { sessionStorage.setItem( store_data, request.responseText ); };

        request.send( null );

    },

    Read_Data: ( data_location, category ) => {

        Database.Send_request( 'Read', data_location, '&category=' + category );

    },

    Update_Data: ( category, cell, data ) => {

        Database.Send_request( 'Update', 'DATABASE', '&category=' + category + '&cell=' + cell
        + '&status=100' + '&data=' + data );

    },

    Update_Multi_Data: ( category, cell, data ) => {

        Database.Send_request( 'Update', 'DATABASE', '&category=' + category + '&cell=' + cell
        + '&status=200' + '&data=' + data );

    },

    Create_Data: ( category, data ) => {

        Database.Send_request( 'Create', 'DATABASE', '&category=' + category + '&data=' +
        Database.Json.stringify( data ) );

    },

    Delete_Data: ( category, cell ) => {

        Database.Send_request( 'Delete', 'DATABASE', '&category=' + category + '&cell=' + cell );

    },

    Json: {

        parse: ( Data ) => {

            var new_text = '';
            var new_array = new Array();

            for ( var a = 1; a < Data.length - 1; a++ ) {

                if ( Data.charAt( a ) == '~' ) { new_array.push( new_text ); new_text = ''; }
                else if ( Data.charAt( a ) == '`' ) { new_text += ' '; }
                else { new_text += Data.charAt( a ); }

            }; new_array.push( new_text ); return new_array;

        },

        stringify: ( data ) => {

            var text = '';
            var changed_data = new Array();

            for ( var d = 0; d < data.length; d++ ) { data[ d ] = ( data[ d ] ).toString(); };

            for ( var b = 0; b < data.length; b++ ) {

                text = '';

                for ( var c = 0; c < data[ b ].length; c++ ) {

                    if ( data[ b ].charAt( c ) == ' ' ) { text += '`' }
                    else { text += data[ b ].charAt( c ); }

                }; changed_data.push( text );

            }; data = changed_data; changed_data = null;
            
            var new_data = '[';

            for ( var a = 0; a < data.length - 1; a++ ) {
                
                new_data += data[ a ];
                new_data += '~';

            }; new_data += data[ data.length - 1 ] + ']';

            return new_data;

        },

        Stringify_Column: ( Column_Name, data_location ) => {

            if ( sessionStorage.getItem( data_location ) == null ) { return -1; };

            var data = JSON.parse( sessionStorage.getItem( data_location ) );

            data = data[ 0 ];

            data = Object.keys( data ).indexOf( Column_Name );

            if ( data < 0 || data >= Database.Json.alphabets.length ) { return -1; };

            return Database.Json.alphabets[ data ];

        },

        Files_Method: ( value ) => {

            var new_value = '';
        
            for ( var v = 0; v <= value.length; v++ ) {
        
                if ( value.charAt(v) == '"' ) { new_value += "'"; }
                else if ( value.charAt(v) == "'" ) { new_value += '"' }
                else { new_value += value.charAt(v) }
        
            }; return new_value;
        
        },

        Unit_Converter: ( from, to, amount ) => {

            if ( Database.Json.Units.indexOf( from ) == -1 ) { return -1; }

            if ( Database.Json.Units.indexOf( to ) == -1 ) { return -1; }

            from = Database.Json.Units.indexOf( from );
            to = Database.Json.Units.indexOf( to );

            if ( from > to ) { return [ amount * ( ( from - to ) * 1024 ), Database.Json.Units[ to ] ]; }
            else if ( to > from ) { return [ amount / ( ( to - from ) * 1024 ), Database.Json.Units[ to ] ]; }
            else { return [ amount, Database.Json.Units[ to ] ]; }

        },

        alphabets: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

        Units: [ 'B', 'KB', 'MB', 'GB', 'TB', 'PB' ]

    }

};

/* category is the Sheet's Name

cell is use in Update and Delete...

In Update the Cell should be Column + Row i.e.. for example --> B2, C12, F34, etc

In Delete the cell should be Row like 5, 1, 4, 9, etc but cell > 2 and the cell should be user id + 2
because that is the Row number of the Sheet...

In Update the cell's row should be like the delete one only...!!!

data is use in Update and Create...

In Update the data can be only a single word, sentence or a number that can be placed in the cell...

In Create the data should be a Json.stringified ( Database.Json.stringify ) formatted array...
In Which the length of the array should be == the length of the Columns is that sheet you entered in
the category parameter...

In Create data the data will be appended as a new row at the last of the "category" sheet */

export { Database };