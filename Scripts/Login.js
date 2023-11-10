function Login() {
    var answer = document.getElementById('username').value;
    if (answer != null) {
        var list = new Array();
        list = JSON.parse( sessionStorage.getItem("Data") );
        var User_list = new Array();
        for (var a = 0; a < list.length; a++) {
            var b = list[a];
            User_list.push( b["User"] );
        }
        list = User_list;
        User_list = null;
        for (var check = 0; check <= (list.length - 1); check++) {
            var respond = list[check];
            if ( respond.toLowerCase() == answer.toLowerCase() ) {
                //The User Passed Away
                if ( ! ( answer.toLowerCase() == "owner" ) ) {
                    var locks_hash = new Array();
                    locks_hash = JSON.parse( sessionStorage.getItem("Data") );
                    User_list = new Array();
                    for (var a = 0; a < locks_hash.length; a++) {
                        var b = locks_hash[a];
                        User_list.push( b["User_Lock"] );
                    }
                    locks_hash = User_list;
                    User_list = null;
                    do {
                        var user_lock = document.getElementById('userlock').value;
                        if ( user_lock != null ) {
                            if ( user_lock == locks_hash[check] ) {
                                //Correct User Lock Entered... User Recognised...!!!
                                localStorage.setItem("Amount_MB", check);
                                location.href = "OS_Loader.html";
                            } else if ( user_lock.toLowerCase() == "./exit" ) {
                                //Stop it and return
                                return 9211;
                            } else {
                                alert("Incorrect User Lock Entered...");
                                return;
                            }
                        } else {
                            return 9211;
                        }
                        
                    } while ( ! ( user_lock == locks_hash[check] ) );
                } else {
                    //No User Lock for the Public User Owner...
                    localStorage.setItem("Amount_MB", 0);
                    location.href = "OS_Loader.html";
                }
                return;
            } //Do not Return Anything just add 1 to check variable
        }
        alert("User ID not Available");
    }
};

function LoginToOwner() {
    localStorage.setItem("Amount_MB", 0);
    location.href = "OS_Loader.html";
}