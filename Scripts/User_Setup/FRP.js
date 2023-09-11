// Exported Functions From Database ==>
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

    let Emails = new Array();
    let Users_Data = JSON.parse( sessionStorage.getItem("Data") );

    if ( Users_Data == null ) {

        alert("Missing Data Please Go to Home Page...");
        return false;

    } else {

        for ( var u = 0; u < Users_Data.length; u++ ) { Emails.push( Users_Data[u]["Account"] ); }
        
        if ( Users_Data.includes(email) ) {

            alert("Please Use a New E-mail... This E-mail is already in use !!! ");
            return false;

        }

    }

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

    document.body.style.backgroundColor = "#000000";

    setTimeout( () => {

        var details = new Array();
        details.push( "Account" );
        details.push( "BIOS" );
        details.push( "Device" );
        details.push( "Firmware" );
        details.push( "Firmware_Version" );
        details.push( "User" );
        details.push( "User_Lock" );

        document.writeln("<p>Connecting to the Server...</p>");
        
        let Data = JSON.parse( localStorage.getItem("Add_User") );
        
        for ( var v = 0; v < Object.keys( Data ).length; v++) {

            if ( ( Object.keys( Data ).indexOf( details[v] ) ) == -1 ) {
                alert("Your Some Data is Missing ! May be you have left some steps... Please Restart Add User from Home Page... Your Money would be Lost :( ");
                location.href = "../../../index.html";
                return false;
            }; // To check that all Data is present or Not !

        }; // Database_ReadData("/count?sheet=User_Accounts", "User_ID" );

        setTimeout( () => {

            document.writeln("<p>Connected to Server Successfully !!! </p>");
            document.writeln("<br>");
            document.writeln("<p>All Details Packed in Package...</p>");
            document.writeln("<p>Size = 7 MB</p>");
            document.writeln("<br>");

            Data.User_ID = ( JSON.parse( sessionStorage.getItem("User_ID") ) )["rows"];
            Data = JSON.stringify( Data );

            // Database_CreateData("?sheet=User_Accounts", Data )

            setTimeout( () => {

                document.writeln("<p>Adding 1 MB File in Package</p>");
                document.writeln("<p>Setting Up User Details as a Package</p>");
                document.writeln("<p>Unzipping Package to Database</p>");
                document.writeln("<br>");

                setTimeout( () => {

                    document.writeln("<p>All Operation Done Successfully !!! </p>");
                    document.writeln("<p>User Created Successfully to the Server</p>");
                    document.writeln("<br>");
                    document.writeln("<p>Disconnecting From the Server...</p>");

                    setTimeout( () => {

                        document.writeln("<p>Disconnected From the Server !!! </p>");

                        setTimeout( () => {

                            sessionStorage.removeItem("User_ID");
                            alert("Congratulations ! Your User Successfully Created on Server");
                            sessionStorage.clear();
                            location.href = "../../../index.html"; return true;

                        },1000 );

                    },2000 );

                },1000 );

            },3000 );

        },2000 );

    },1500 );

}