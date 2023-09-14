function Welcome() { location.href = "./Conditions.html"; }

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
    
    setTimeout( () => {

        var details = new Array();
        details.push( "User" );
        details.push( "User_Lock" );
        details.push( "BIOS" );
        details.push( "Firmware" );
        details.push( "Firmware_Version" );
        details.push( "Device" );
        details.push( "Account" );

        let para = undefined;
        para = document.createElement('p');
        para.innerHTML = 'Connecting to the Server...'
        document.body.appendChild(para);
        
        let Data = JSON.parse( localStorage.getItem("Add_User") );
        
        for ( var v = 0; v < Object.keys( Data ).length; v++) {

            if ( ( Object.keys( Data ).indexOf( details[v] ) ) == -1 ) {
                alert("Your Some Data is Missing ! May be you have left some steps... Please Restart Add User from Home Page... Your Money would be Lost :( ");
                location.href = "../../../index.html";
                return false;
            }; // To check that all Data is present or Not !

        }; var _User_ID_ = ( JSON.parse( sessionStorage.getItem("Data") ) ).length;

        var order = new Array();

        for ( var f = 0; f < Object.keys( Data ).length; f++ ) {
            
            order.push( Data[ details[f] ] );

        }; Data = order; order = null; Data.unshift(_User_ID_);

        setTimeout( () => {

            para = document.createElement('p');
            para.innerHTML = 'Connected to Server Successfully !!! ';
            document.body.appendChild(para);

            para = document.createElement('p');
            para.innerHTML = 'All Details Packed in Package...';
            document.body.appendChild(para);

            para = document.createElement('p');
            para.innerHTML = 'Size = 7 MB';
            document.body.appendChild(para);

            setTimeout( () => {

                var Request = {
                    TYPE: "POST",
                    LOCATION: "User_Accounts",
                    WINDOW: 'index.html',
                    DATA: Data
                }; Request = JSON.stringify( Request );
                sessionStorage.setItem('Request', Request);

                para = document.createElement('p');
                para.innerHTML = 'Adding 1 MB File in Package';
                document.body.appendChild(para);

                para = document.createElement('p');
                para.innerHTML = 'Unzipping Package to Database';
                document.body.appendChild(para);

                setTimeout( () => {

                    para = document.createElement('p');
                    para.innerHTML = 'All Operation Done Successfully !!! ';
                    document.body.appendChild(para);

                    para = document.createElement('p');
                    para.innerHTML = 'User Created Successfully to the Server';
                    document.body.appendChild(para);

                    para = document.createElement('p');
                    para.innerHTML = 'Disconnecting From the Server...';
                    document.body.appendChild(para);

                    setTimeout( () => {

                        para = document.createElement('p');
                        para.innerHTML = 'Disconnected From the Server !!! ';
                        document.body.appendChild(para);

                        setTimeout( () => {

                            alert("Congratulations ! Your User Successfully Created on Server");
                            
                            location.href = "../../../Data_Resources/Requests_Page.html"; return true;

                        },1000 );

                    },2000 );

                },1000 );

            },3000 );

        },2000 );

    },3000 );

}