// Exported Functions From Database ==>

const request = new XMLHttpRequest();
const Database = 'https://sheetdb.io/api/v1/qhlszwbu7dxp7';

function Database_CreateData(sheet, record) {
    var Database_URL = Database + sheet;
    request.open("POST", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(record);
}

function Database_ReadData(sheet, record, argument) {

    var Database_URL = Database + argument + sheet;
    request.open("GET", Database_URL);
    request.send();

    request.onreadystatechange = () => {
        if ( request.responseText != null && request.responseText != '' ) {
            sessionStorage.setItem(record, request.responseText);
        }
    }

}

// Real Script Starts from Below ==>

function Welcome() {
    location.href = "./Conditions.html";
}

function Check() {

    let all = document.querySelectorAll('input');
    if ( all[3].checked == true ) {
        all[0].checked = true;
        all[1].checked = true;
        all[2].checked = true;
    }; if ( ( all[0].checked == true ) && ( all[1].checked == true ) && ( all[2].checked == true ) ) {
        document.querySelector('a').style.visibility = "visible";
    } else {
        document.querySelector('a').style.visibility = "hidden";
    }; return true;

}

function Account() {

    let details = document.querySelectorAll('input');
    let email = details[0].value;
    let password = details[1].value;
    let Data = JSON.parse( sessionStorage.getItem("Accounts_Data") );

    if ( Data == null ) {

        alert("Missing Data Please Go to Home Page...");
        return false;

    } else if ( email == '' || email == null || password == null || password == '' ) {

        alert("Please Fill Both the Information 'Username' and 'Password' ..!! ");
        return false;

    } else {

        var users = new Array();
        var passwords = null;

        for ( var u = 0; u < Data.length; u++ ) {

            passwords = new Object();
            passwords["Username"] = Data[u]["Username"];
            passwords["Password"] = Data[u]["Password"];
            users.push( passwords );

        }; for ( var u = 0; u < users.length; u++ ) {

            if ( users[u]["Username"] == email ) {

                if ( users[u]["Password"] == password ) {

                    var put = JSON.parse( localStorage.getItem("Add_User") );
                    put.Account = email; put = JSON.stringify( put );
                    localStorage.setItem("Add_User", put);
                    location.href = "./Finish.html";
                    return true;

                } else {

                    alert("Incorrect Password ! Please Try Again...");
                    return false;

                };

            }; // Move ahead this was not the email matched...
        }; alert("Sorry this Email wasn't Found on the Server..."); location.reload();

    }
}

function Finish() {

    var details = new Array();
    details.push( "Account" );
    details.push( "BIOS" );
    details.push( "Device" );
    details.push( "Firmware" );
    details.push( "Firmware_Version" );
    details.push( "User" );
    details.push( "User_Lock" );
    
    let Data = JSON.parse( localStorage.getItem("Add_User") );
    
    for ( var v = 0; v < Object.keys( Data ).length; v++) {

        if ( ( Object.keys( Data ).indexOf( details[v] ) ) == -1 ) {
            alert("Your Some Data is Missing ! May be you have left some steps... Please Restart Add User from Home Page... Your Money would be Lost :( ");
            return false;
        }; // To check that all Data is present or Not !

    }; Database_ReadData("?sheet=User_Accounts", "User_ID", "/count" );

    setTimeout( () => {

        Data.User_ID = ( JSON.parse( sessionStorage.getItem("User_ID") ) )["rows"];
        sessionStorage.removeItem("User_ID");
        Data = JSON.stringify( Data );

        Database_CreateData("?sheet=User_Accounts", Data )

        setTimeout( () => {

            alert("Congratulations ! Your User Successfully Created on Server");
            location.href = "../../../index.html";
            return true;

        },3000 );

    },2000 );

}