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
                    localStorage.setItem("Account", put);
                    location.href = "./Finish.html";

                } else { alert("Incorrect Password ! Please Try Again..."); };

            }; // Move ahead this was not the email matched...
        }; alert("Sorry this Email wasn't Found on the Server..."); location.reload();

    }
}