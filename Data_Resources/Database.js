function Read_UserData() {

    setTimeout( () => {

        if ( sessionStorage.getItem("Accounts_Data") == null ) {

            Database.Read_Data( 'Accounts_Data', 'Accounts' );

        };

        setTimeout( () => {

            if ( sessionStorage.getItem("Data") == null ) {

                Database.Read_Data( 'Data', 'User_Accounts' );

            };
        
            setTimeout( () => {

                if ( sessionStorage.getItem("Data") != null &&
                sessionStorage.getItem("Accounts_Data") != null )

                {

                    localStorage.removeItem("Add_User"); location.href = "../index.html";

                }; /* return "All Data Extracted from the Server"...!!! */

            },1000 );

        },1000 );

    },1000 );

};

const Database = {

    request_url: 'https://script.google.com/macros/s/AKfycbzaGAA1k5GC0xTqEDn68zonSABMBIzg_enYnuMOE8py7WoEd6MPtsCrCBbRb2_WlJ8/exec',

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
        + '&data=' + data );

        setTimeout( () => { sessionStorage.removeItem( 'DATABASE' ); },1000 );

    },

    Create_Data: ( category, data ) => {

        Database.Send_request( 'Create', 'DATABASE', '&category=' + category + '&data=' +
        Database.Json.stringify( data ) );

        setTimeout( () => { sessionStorage.removeItem( 'DATABASE' ); },1000 );

    },

    Delete_Data: ( category, cell ) => {

        Database.Send_request( 'Delete', 'DATABASE', '&category=' + category + '&cell=' + cell );

        setTimeout( () => { sessionStorage.removeItem( 'DATABASE' ); },1000 );

    },

    Json: {

        parse: ( Data ) => {

            var new_text = '';
            var new_array = new Array();

            for ( var a = 1; a < Data.length - 1; a++ ) {

                if ( Data.charAt(a) == '~' ) { new_array.push( new_text ); new_text = ''; }
                else if ( Data.charAt(a) == '`' ) { new_text += ' '; }
                else { new_text += Data.charAt( a ); }

            }; new_array.push( new_text ); return new_array;

        },

        stringify: ( data ) => {

            var text = '';
            var changed_data = new Array();

            for ( var b = 0; b < data.length; b++ ) {

                text = '';

                for ( var c = 0; c < data[b].length; c++ ) {

                    if ( data[ b ].charAt( c ) == ' ' ) { text += '`' }
                    else { text += data[ b ].charAt( c ); }

                }; changed_data.push( text );

            }; data = changed_data; changed_data = null;
            
            var new_data = '[';

            for ( var a = 0; a < data.length - 1; a++ ) {
                
                new_data += data[a];
                new_data += '~';

            }; new_data += data[ data.length - 1 ] + ']';

            return new_data;

        }

    }

};

/* category is the Sheet's Name

cell is use in Update and Delete...

In Update the Cell should be Column + Row i.e.. for example --> B2, C12, F34, etc

In Delete the cell should be Row like 5, 1, 4, 9, etc but cell > 0 and the cell should be user id + 2
because that is the Row number of the Sheet...

In Update the cell's row should be like the delete one only...!!!

data is use in Update and Create...

In Update the data can be only a single word, sentence or a number that can be placed in the cell...

In Create the data should be a Json.stringified ( Database.Json.stringify ) formatted array...
In Which the length of the array should be == the length of the Columns is that shhet you entered in
the category parameter...

In Create data the data will be appended as a new row at the last of the "category" sheet */

window.onload = () => { if ( location.pathname.includes( 'Load_Data.html' ) ) { Read_UserData(); }; };

export { Database };