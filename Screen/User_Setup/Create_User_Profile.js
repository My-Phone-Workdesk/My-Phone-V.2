function Create_User_Profile() {
    var OS = sessionStorage.getItem("OS");
    var BIOS = sessionStorage.getItem("BIOS");
    document.body.style.backgroundPosition = "center left";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    setTimeout( () => {
        document.body.style.backgroundImage = "url('../../OS_Package/" + OS + ".jpg" + "')";
        setTimeout( () => {
            // document.body.style.backgroundImage = '';
        }, BIOS * 2000 );
    }, BIOS * 1000 );
}

function Submit_Details() {

}

function Check_Password_Strength() {
    let Check_Box = document.getElementById("Password_Strength");
    let password_input = document.getElementById("user_password");
    let password = password_input.value;
    var Strong_Char = new Array();
    Strong_Char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '`', '~', ',', '.', '<', '>', '/', '?', ':', ';', '[', ']', '{', '}', '|', '"', "'"];
    if ( password.length >= 8 ) {
        Check_Box.style.backgroundColor = 'yellow';
    }
    for (var no = 0; no < password.length; no++) {
        if ( password.charAt(no) ) {

        }
    }
}