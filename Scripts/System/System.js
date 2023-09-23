import { Database } from "../../Data_Resources/Database.js";

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

};

function Files( value ) {

    var new_value = '';

    for ( var v = 0; v <= value.length; v++ ) {

        if ( value.charAt(v) == '"' ) { new_value += "'"; }
        else if ( value.charAt(v) == "'" ) { new_value += '"' }
        else { new_value += value.charAt(v) }

    }; return new_value;

};

window.onload = () => {

    if ( location.pathname.includes( 'Power_Off.html' ) ) {

        let script = document.createElement( 'script' );

        document.head.appendChild( script );
        script.async = true;
        script.defer = true;
        script.src = "https://apis.google.com/js/api.js";

        script.onload = () => { Database.gapiLoaded(); };

    } else if ( location.pathname.includes( 'Restart.html' ) ) { Restart(); }

};

if ( 2 + 2 == 5 ) { Files( "Tata{'Lala'}Thaiya" ) }; // Until the function is in use...