function Read_UserData() {

    setTimeout( () => {

        if ( sessionStorage.getItem("Accounts_Data") == null ) { Read_Data('Accounts', 'Accounts_Data') }
        if ( sessionStorage.getItem("Data") == null ) { Read_Data('User_Accounts', 'Data') }
        
        setTimeout( () => {

            if ( sessionStorage.getItem("Data") != null && sessionStorage.getItem("Accounts_Data") != null ) { 
                localStorage.removeItem("Add_User"); location.href = "../index.html";
            }; /* return "All Data Extracted from the Server"...!!! */

        },2000 );

    },1000 );

}

const spreadsheet_Id = '1-jMb9tOG--iC9_onIXqK1LTWKGqs0H7iOTXDTu7W1gs';
const CLIENT_ID = '463724458932-eeagdhubnlq301h6656v042vk4t645c2.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAXdwGN4T6QDFVz6aIC4YnKY-iVvUttqRM';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() { gapi.load('client', initializeGapiClient); }

async function initializeGapiClient() {
    try {
        await gapi.client.init({
            apiKey: [API_KEY],
            discoveryDocs: [DISCOVERY_DOC]
        });
        gapiInited = true;
    } catch (error) {
       console.log(error); return;
    }
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: ''
    });
    gisInited = true;
} // These are the imported functions from NET...

async function Read_Data(sheet_name, path) { let response;
    try {

        response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheet_Id,
        range: sheet_name });

    } catch (err) {
        console.log(err); return;

    }; const range = response.result;

    if (!range || !range.values || range.values.length == 0) {

        console.warn("An Error Takes Place..."); return;

    }; const output = range.values.reduce((str, row) => `${str}\n${row}`); // Please explain this...

    var result = new Array(); result = output.split('\n');
    var Headers = new Array(); Headers = result[0].split(',');
    var Final_Data = new Array();
    Single_User_Data = new Array(); All_User_Data = new Array();

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
}

async function Update_Data( sheet_name, Column, Row, Data ) {
    try {

        await gapi.client.sheets.spreadsheets.values.update({

            spreadsheetId: spreadsheet_Id,
            range: ( sheet_name + '!' + Column + Row ),
            valueInputOption: 'RAW',
            values: [ [ Data ] ] // Data to Update in the Cell...

        });

    } catch ( err ) { console.warn(err); }
}

function Request_Data() {

    setTimeout( () => {

        var request_type = sessionStorage.getItem('Request');
        request_type = JSON.parse(request_type);
        
        if ( request_type["TYPE"] == "GET" ) {

            Read_Data( request_type["LOCATION"], request_type["PATH"] );

        } else if ( request_type["TYPE"] == "PUT" ) {

            Update_Data( request_type["LOCATION"], request_type["COLUMN"], request_type["ROW"], request_type["DATA"] );

        } else if ( request_type["TYPE"] == "POST" ) {

            Create_Data( request_type["LOCATION"], request_type["DATA"] );

        } else if ( request_type["TYPE"] == "DELETE" ) {

            Clear_Data( request_type["LOCATION"], request_type["COLUMN"], request_type["ROW"] );

        } else { return; }
        
        setTimeout( () => { location.href = '../' + request_type["WINDOW"]; },1500 );

    },1000 );

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
}

async function Create_Data( sheet_name, Data ) {
    try {

        await gapi.client.sheets.spreadsheets.values.append({

            spreadsheetId: spreadsheet_Id,
            range: sheet_name,
            valueInputOption: 'RAW',
            values: [ Data ]

        });
    } catch (err) { console.warn(err) }
}

async function Clear_Data( sheet_name, COLUMN, ROW ) {
    try {

        await gapi.client.sheets.spreadsheets.values.clear({

            spreadsheetId: spreadsheet_Id,
            range: sheet_name + '!' + COLUMN + ROW,

        });

    } catch ( err ) { console.warn( err ) }
}