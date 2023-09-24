function Read_UserData() {

    setTimeout( () => {

        if ( sessionStorage.getItem("Accounts_Data") == null ) { Database.Read_Data('Accounts', 'Accounts_Data') }
        if ( sessionStorage.getItem("Data") == null ) { Database.Read_Data('User_Accounts', 'Data') }
        
        setTimeout( () => {

            if ( sessionStorage.getItem("Data") != null && sessionStorage.getItem("Accounts_Data") != null ) { 
                localStorage.removeItem("Add_User"); location.href = "../index.html";
            }; /* return "All Data Extracted from the Server"...!!! */

        },2000 );

    },3000 );

};

// let tokenClient; ( This is declared but not used in the script... )
// let gapiInited = false; ( This is declared but its value is never read... )

const Database = {

    Authorization: {

        spreadsheet_Id: '1-jMb9tOG--iC9_onIXqK1LTWKGqs0H7iOTXDTu7W1gs',
        API_KEY: 'AIzaSyAXdwGN4T6QDFVz6aIC4YnKY-iVvUttqRM',
        DISCOVERY_DOC: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
        SCOPES: 'https://www.googleapis.com/auth/spreadsheets',
        SheetDB_API: "https://sheetdb.io/api/v1/qhlszwbu7dxp7",
        SheetDB_Error: "Request limit exceeded. Upgrade your plan."
    
    },

    Read_Data: async (sheet_name, path) => { let response;

        try {
    
            response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: Database.Authorization.spreadsheet_Id,
            range: sheet_name });
    
        } catch (err) { console.warn( err ); return; };
    
        const range = response.result;
    
        if (!range || !range.values || range.values.length == 0) {
    
            console.warn("An Error Takes Place..."); return;
    
        }; const output = range.values.reduce((str, row) => `${str}\n${row}`); // Please explain this...
    
        var result = new Array(); result = output.split('\n');
        var Headers = new Array(); Headers = result[0].split(',');
        var Final_Data = new Array();
        var Single_User_Data = new Array(); var All_User_Data = new Array();
    
        for ( var v = 1; v < result.length; v++ ) {
    
            All_User_Data.push( result[v].split(',') );
    
        }; for ( var a = 0; a < All_User_Data.length; a++ ) {
    
            Single_User_Data = All_User_Data[a];
    
            if ( Single_User_Data.length == Headers.length ) {
    
                var classify = new Object();
    
                for ( var s = 0; s < Headers.length; s++ ) {
    
                    classify[Headers[s]] = Single_User_Data[s];
    
                }; Final_Data.push(classify);
    
            } else { console.log("Error : Missing Details..."); }

        }; Final_Data = JSON.stringify(Final_Data); sessionStorage.setItem(path, Final_Data);
    
    },

    Update_Data: async ( sheet_name, Column, Row, Data ) => {

        try {

            await gapi.client.sheets.spreadsheets.values.update({
    
                spreadsheetId: Database.Authorization.spreadsheet_Id,
                range: ( sheet_name + '!' + Column + Row ),
                valueInputOption: 'RAW',
                values: [ [ Data ] ] // Data to Update in the Cell...
    
            });
    
        } catch ( err ) { console.warn( err ) };

    },

    Create_Data: async ( sheet_name, Data ) => {

        try {

            await gapi.client.sheets.spreadsheets.values.append({
    
                spreadsheetId: Database.Authorization.spreadsheet_Id,
                range: sheet_name,
                valueInputOption: 'RAW',
                insertDataOption: 'INSERT_ROWS',
                values: [ Data ]
    
            });
        } catch (err) { console.warn(err.result.error) }

    },

    Clear_Data: async ( sheet_name, COLUMN, ROW ) => {

        try {

            await gapi.client.sheets.spreadsheets.values.clear({
    
                spreadsheetId: Database.Authorization.spreadsheet_Id,
                range: sheet_name + '!' + COLUMN + ROW,
    
            });
    
        } catch (err) { console.warn(err.result.error) }

    },

    gapiLoaded: () => {

        gapi.load('client', initializeGapiClient);

        async function initializeGapiClient() {

            try {
        
                await gapi.client.init({
                    apiKey: [ Database.Authorization.API_KEY ],
                    discoveryDocs: [ Database.Authorization.DISCOVERY_DOC ],
                    sheets: [ Database.Authorization.SCOPES ]
                });
        
            } catch (err) { console.warn(err.result.error); return; }
        
        };

    }

};

/* IMPORTANT PROPERTIES OF 'Request' Data ( sessionStorage ) -->

    COMMON PROPERTIES >>

    ---------------------------------
    
    "TYPE" ==> "GET" / "PUT" / "POST" / "DELETE" !

    "LOCATION" ==> This will be the Sheet's Name...

    "WINDOW" ==> After the Process of Request is been done then the Screen will be on this Location i.e.. HTML Screen !!!

    ------------------------------------

    In Type "GET" Extra Properties >>

    -------------------------------------

    "PATH" ==> The Data will store in a Key of sesssionStorage so this will be the Key's name...

    ---------------------------------------

    In Type "PUT" Extra Properties >>

    ---------------------------------------

    "COLUMN" ==> The Column Name of the Database Sheet i.e.. in Single Alphabets

    "ROW" ==> The Row Number of the Database Sheet i.e.. INT type Row number !!!

    "DATA" ==> The Data here will be a Single String i.e.. the data that has to be updated at the location of the sheet where Column and Row intersecting !!!

    --------------------------------------------

    In Type "POST" Extra Properties >>

    --------------------------------------------

    "Data" ==> The Data here will be an array or a list of strings... The array's length should be equal to the Number of Columns on that particular 'LOCATION' of the Sheet or Table !!! */ 

window.onload = () => {

    if ( location.pathname.includes( 'Load_Data.html' ) ) {

        let script = document.createElement( 'script' );

        document.head.appendChild( script );
        script.async = true;
        script.defer = true;
        script.src = "https://apis.google.com/js/api.js";

        script.onload = () => { Database.gapiLoaded(); };

        Read_UserData();

    };

};

export { Database };