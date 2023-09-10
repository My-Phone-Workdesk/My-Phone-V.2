// Exported Functions From Database ==>

const request = new XMLHttpRequest();
const Database = 'https://sheetdb.io/api/v1/qhlszwbu7dxp7';

function Database_UpdateData(sheet, argument, record) {
    var Database_URL = Database + argument + sheet;
    request.open("PUT", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(record);
}

// Real Script Starts from Below ==>

function Restart() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundImage = "url('../../Images/Start_Up_Logo.jpg')";

    setTimeout ( () => {

        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";
        document.body.style.backgroundImage = "none";
        document.body.style.background = "none";
        document.body.style.backgroundColor = "#000000";
        
        setTimeout( () => { location.href = "../../index.html"; },2000 );
           
    }, 15575);

}

function Files( value ) {

    var new_value = '';

    for ( var v = 0; v <= value.length; v++ ) {

        if ( value.charAt(v) == '"' ) { new_value += "'"; }
        else if ( value.charAt(v) == "'" ) { new_value += '"' }
        else { new_value += value.charAt(v) }

    }; return new_value;

}

function Upload_Storage( data, user ) {

    data = JSON.stringify( data );

    data = Files( data );

    data = { "Data": data };

    data = JSON.stringify( data );

    Database_UpdateData("?sheet=Files", "/User/" + user, data);

    setTimeout( () => {},2000 );

}

function Email() {  }