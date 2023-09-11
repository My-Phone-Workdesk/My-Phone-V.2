/* Common API KEY == https://sheetdb.io/api/v1/qhlszwbu7dxp7
Just add Sheet name after the API...
To Select a range add after sheet name += &limit=(Number of Rows)
To pass the range between two rows add after limit += &offset= (After which row means row number...)
For Example ***&limit=10&offset=10 so it will select 10 rows after row 10 means 11 to 20... 

To put a condition according to column name put this after sheet name &(Column name)=(Column Value)
and you can put so on using & operator in API KEY... But in this case put /search after common API KEY... so for example --> https://sheetdb.io/api/v1/qhlszwbu7dxp7/search?sheet=User_Accounts&User=Owner */

const request = new XMLHttpRequest();
const Database = 'https://sheetdb.io/api/v1/qhlszwbu7dxp7';

function Database_ReadData(sheet, record) {

    var Database_URL = Database + sheet;
    request.open("GET", Database_URL);
    request.send();

    request.onreadystatechange = () => {

        if ( request.responseText != null && request.responseText != '' ) {

            sessionStorage.setItem(record, request.responseText);

        } else if ( request.status == 429 ) {

            sessionStorage.clear();
            location.href = "./Error.html";

        }

    }

}

function Read_UserData() {

    if ( sessionStorage.getItem("Accounts_Data") == null ) {

        Database_ReadData("?sheet=Accounts", "Accounts_Data"); // This is for Accounts Table Data
        setTimeout( () => { location.reload(); },2000 );

    }; if ( sessionStorage.getItem("Data") == null ) {

        Database_ReadData("?sheet=User_Accounts", "Data"); // This is for User Accounts Table 
        setTimeout( () => { location.reload(); },2000 );

    }; if ( sessionStorage.getItem("Data") != null && sessionStorage.getItem("Accounts_Data") != null ) {

        localStorage.removeItem("Add_User"); location.href = "../index.html";

    } // return "All Data Extracted from the Server"...!!!

}

function Database_UpdateData(sheet, argument, record) {
    var Database_URL = Database + argument + sheet;
    request.open("PUT", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(record);
}

function Database_CreateData(sheet, record) {
    var Database_URL = Database + sheet;
    request.open("POST", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(record);
}

function Database_DeleteData(sheet, argument) {
    var Database_URL = Database + argument + sheet;
    request.open("DELETE", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(null);
}

/* But if you want to select values under a column header for example you want to select all the names that are available under name column so add this after comman API key += /Keys

But if you want to get all the names of Columns add after Common API Key += /keys

You can also add Sheet name after /keys by putting ?sheet=(name of the sheet)...

To get the sheet name just add up after commom API Key += /name...

To get all the sheets name on the workbook just add after common API key += /sheets...

To count how many rows are present in the sheet just add up after common API key += /count
and you can also add ?sheet=(Sheet Name)... after /count to refer to a sheet...

You can also put /search_or to check that any one condition is true...
You can also put &limit=(limit) after search... that will give you the first searched data...
If you put only search that will work like search_and but this doesn't exist so only put search...

There is also a parameter that is &casesensitive=(true/false) which check the case sensivity of the data that is that true or false... accordingly to the given coditions...

Sorting Data ==> &sort_by=(name of the Column)
You can also change sort type by &sort_order = (desc/asc)

There is another parameter too that is &single_object=(true/false)
The above will give the first record in the form of an object not in JSON...


To Update an record just add up '/' + (Column Name) + '/' + (Row value) after the Common API key
You can also put ?sheet= (sheet name) to update data in a specific sheet...
Update will work in PUT request...

To add data you have to change the request to POST and just add common api key and then select the sheet in which you want to add data by using ?sheet= (sheet name) and fill the values in a JSON file of what to add the data and in which field...

To delete Data records you need to change the request to DELETE and the format would be same as Update one but here it will delete the whole row instead of updating the row's value... */

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
    gisInited = true; }

var sheet_name = 'User_Accounts';

async function listData() { let response;
    try {
        response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1-jMb9tOG--iC9_onIXqK1LTWKGqs0H7iOTXDTu7W1gs',
        range: sheet_name,
        });
    } catch (err) {
        document.getElementById('content').innerText = err.message;
        return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        document.getElementById('content').innerText = 'No values found.';
        return;
    }
    const output = range.values.reduce((str, row) => `${str}\n${row}`);
    document.getElementById('content').innerText = output; 
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
    }; Final_Data = JSON.stringify(Final_Data); sessionStorage.setItem('Data', Final_Data); }

async function updateData() {
    alert("I do not work at all!");
}