function Create_User_Profile() {
    var OS = ( JSON.parse( localStorage.getItem("Add_User") ) )["Firmware"];
    var BIOS = ( JSON.parse( localStorage.getItem("Add_User") ) )["BIOS"];
    document.body.style.backgroundPosition = "center left";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    document.getElementById("Submit").style.visibility = 'hidden';
    setTimeout( () => {
        document.body.style.backgroundImage = "url('../../OS_Package/" + OS + ".jpg" + "')";
        setTimeout( () => {
            // document.body.style.backgroundImage = '';
        }, BIOS * 2000 );
    }, BIOS * 1000 );
}

function Submit_Details() {
   
    var obj = JSON.parse( localStorage.getItem("Add_User") );
    obj.User = document.getElementById("user_profile").value;
    obj.User_Lock= document.getElementById("user_password").value;
    obj = JSON.stringify(obj); localStorage.setItem("Add_User", obj);
    location.href = "./FRP/FRP.html"; return true;
}

function Check_Password_Strength() {
    let Check_Box = document.getElementById("Password_Strength");
    let password_input = document.getElementById("user_password");
    let password = password_input.value;
    var Strong_Char = new Array();
    Strong_Char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '`', '~', ',', '.', '<', '>', '/', '?', ':', ';', '[', ']', '{', '}', '|', '"', "'", '_'];
    if ( password.includes(' ') ) {
        Check_Box.style.backgroundColor = 'red';
        document.getElementById("Submit").style.visibility = 'hidden';

        setTimeout( () => {

            alert("Very Weak Password !! Can't Go Ahead... ( Do not include Spaces )... ");

        },300 ); return "Very Weak";

    } else {
        if ( password.length >= 8 ) {
            Check_Box.style.backgroundColor = 'yellow'; // Weak
            for (var no = 0; no < Strong_Char.length; no++) {
                if (password.includes( Strong_Char[no] ) ) {
                    Check_Box.style.backgroundColor = 'green';
                    document.getElementById("Submit").style.visibility = 'visible';
                    return "Strong";
                }
            }; document.getElementById("Submit").style.visibility = 'hidden';

            setTimeout( () => {

                alert("Weak Password !! Can't Go Ahead... ( Make it more Stronger )...");

            },300 ); return "Weak";

        } else {
            Check_Box.style.backgroundColor = 'red';
            document.getElementById("Submit").style.visibility = 'hidden';

            setTimeout( () => {

                alert("Very Weak Password !! Can't Go Ahead... ( Do not include Spaces )... ");

            },300 ); return "Very Weak";

        }
    }
}