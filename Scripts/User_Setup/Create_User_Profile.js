// Imported Functions From Database and Other Services ==>

import { give_alert } from "../Alert.js";

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Create_User_Profile.html' ) ) {

        Create_User_Profile();

        let Submit_button = document.getElementById( 'Submit' );
        Submit_button.addEventListener( 'click', Submit_Details );

        let Password_Strength = document.getElementById( 'Password_Strength' );
        Password_Strength.addEventListener( 'click', Check_Password_Strength );

    };

}; 

function Create_User_Profile() {

    var OS = ( JSON.parse( localStorage.getItem( "Add_User" ) ) )[ "Firmware" ];
    var BIOS = ( JSON.parse( localStorage.getItem( "Add_User" ) ) )[ "BIOS" ];
    var version = ( JSON.parse( localStorage.getItem( "Add_User" ) ) )[ "Firmware_Version" ];

    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";

    document.getElementById("Submit").style.visibility = 'hidden';

    setTimeout( () => {

        document.body.style.backgroundImage = "url('../../OS_Package/" + OS + ".jpg" + "')";

        let version_output = document.getElementById( 'version' );
        version_output.innerHTML = "Version:" + version;

        setTimeout( () => { return true; }, BIOS * 2000 );

    }, BIOS * 1000 );

};

function Submit_Details() {

    let user_profile = document.getElementById("user_profile").value;
    let Data = JSON.parse( sessionStorage.getItem("Data") );
    let users_list = new Array();

    for ( var v = 0; v < Data.length; v++ ) { users_list.push( Data[v]["User"] ); } Data = null;

    if ( user_profile == null || user_profile == '' ) {

        return give_alert( "Please Fill User Profile Name...", () => { return false; });

    } else if ( users_list.includes(user_profile) ) {

        return give_alert(
            
            "This User Profile Name is already taken ! Try Another One...", () => { return false; }
            
        );

    } else {

        var obj = JSON.parse( localStorage.getItem("Add_User") );
        obj.User = user_profile;
        obj.User_Lock = document.getElementById("user_password").value;
        obj = JSON.stringify(obj); localStorage.setItem("Add_User", obj);
        location.href = "./FRP/FRP.html"; return true;

    };

};

function Check_Password_Strength() {

    let Check_Box = document.getElementById("Password_Strength");
    let password_input = document.getElementById("user_password");

    let password = password_input.value;
    var Strong_Char = new Array();

    Strong_Char = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '`', '~', ',', '.', '<', '>', '/', '?', ':', ';', '[', ']', '{', '}', '|', '"', "'", '_' ];

    if ( password.includes(' ') ) {

        Check_Box.style.backgroundColor = 'red';
        document.getElementById("Submit").style.visibility = 'hidden';

        setTimeout( () => {

            return give_alert(
                
                "Very Weak Password !! Can't Go Ahead... ( Do not include Spaces )... ", () => { return false; }
                
            );

        },300 ); return "Very Weak";

    } else {

        if ( password.length >= 8 ) {

            Check_Box.style.backgroundColor = 'yellow'; // Weak

            for (var no = 0; no < Strong_Char.length; no++) {

                if (password.includes( Strong_Char[no] ) ) {

                    Check_Box.style.backgroundColor = 'green';
                    setTimeout( () => { Check_Box.remove(); },500 );
                    document.getElementById("Submit").style.visibility = 'visible';
                    return "Strong";

                };

            }; document.getElementById("Submit").style.visibility = 'hidden';

            setTimeout( () => {

                return give_alert(
                    
                    "Weak Password !! Can't Go Ahead... ( Make it more Stronger )...", () => { return false; }
                    
                );

            },300 ); return "Weak";

        } else {

            Check_Box.style.backgroundColor = 'red';
            document.getElementById("Submit").style.visibility = 'hidden';

            setTimeout( () => {

                return give_alert(
                    
                    "Very Weak Password !! Can't Go Ahead... ( Do not include Spaces )... ",
                    
                    () => { return false; }
                
                );

            },300 ); return "Very Weak";

        };

    };
    
};