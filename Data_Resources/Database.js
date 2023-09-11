function Read_UserData() {

    setTimeout( () => {

        if ( sessionStorage.getItem("Accounts_Data") == null ) { listData('Accounts', 'Accounts_Data') }
        if ( sessionStorage.getItem("Data") == null ) { listData('User_Accounts', 'Data') }
        
        setTimeout( () => {

            if ( sessionStorage.getItem("Data") != null && sessionStorage.getItem("Accounts_Data") != null ) { 
                localStorage.removeItem("Add_User"); location.href = "../index.html";
            }; /* return "All Data Extracted from the Server"...!!! */

        },2000 );

    },1000 );

};

const CLIENT_ID = '463724458932-eeagdhubnlq301h6656v042vk4t645c2.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAXdwGN4T6QDFVz6aIC4YnKY-iVvUttqRM';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() { gapi.load('client', initializeGapiClient); }

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true; }

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited = true;
}; // These are the imported functions from NET...

async function listData(sheet_name, path) { let response;
    try {
        response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1-jMb9tOG--iC9_onIXqK1LTWKGqs0H7iOTXDTu7W1gs',
        range: sheet_name,
        });
    } catch (err) {
        console.warn(err); return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("An Error Takes Place..."); return;
    }
    const output = range.values.reduce((str, row) => `${str}\n${row}`);
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
        } else {
            console.log("Error : Missing Details...");
        }
    }; Final_Data = JSON.stringify(Final_Data); sessionStorage.setItem(path, Final_Data); }

async function updateData() {
    alert("I do not work at all!");
}