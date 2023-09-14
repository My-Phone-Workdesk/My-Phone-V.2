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

function Upload_Storage( data, user, Initial_Location, Final_Location ) {

    data = JSON.stringify( data );

    data = Files( data );

    var User_No = JSON.parse( sessionStorage.getItem("Data") );
    
    for ( var u = 0; u > -1 ; u++ ) {

        if ( User_No[u]["User"] == user ) { User_No = User_No[u]["User_ID"]; }

    }

    var Request = {
        TYPE: "PUT",
        LOCATION: "Files",
        WINDOW: Final_Location,
        COLUMN: "B",
        ROW: User_No,
        DATA: data
    }; Request = JSON.stringify( Request );

    sessionStorage.setItem( 'Request', Request );

    location.href = Initial_Location + 'Data_Resources/Requests_Page.html';

}

/* 1 - Devices.js
2 - index.js */