window.onload = () => {

    if ( location.pathname.includes( 'Login_User.html' ) ) {

        let username_input = document.getElementById( 'username' );
        username_input.addEventListener( 'keyup', () => {

            username_input.setAttribute( 'value', username_input.value );

        });

        let password_input = document.getElementById( 'userlock' );
        password_input.addEventListener( 'keyup', ( event ) => {

            if ( event.key == 'Enter' ) {

                if ( username_input.value != '' && password_input.value != '' ) { Login(); };

            } else {

                password_input.setAttribute( 'value', password_input.value );

            };

        });

        let sign_in = document.getElementById( 'sign-in' );
        sign_in.addEventListener( 'click', Login );

        let owner_signin = document.getElementById( 'owner-signin' );
        owner_signin.addEventListener( 'click', () => {

            localStorage.setItem("Amount_MB", 0); location.href = "OS_Loader.html";

        });

    };

};

function Login() {

    var answer = document.getElementById('username').value;

    if ( answer != null ) {

        var list = new Array();
        list = JSON.parse( sessionStorage.getItem("Data") );
        var User_list = new Array();

        for (var a = 0; a < list.length; a++) {

            var b = list[a]; User_list.push( b["User"] );

        }; list = User_list; User_list = null;

        for (var check = 0; check <= (list.length - 1); check++) {

            var respond = list[check];

            if ( respond.toLowerCase() == answer.toLowerCase() ) {

                //The User Passed Away ! OM Shanti 😞

                if ( ! ( answer.toLowerCase() == "owner" ) ) {

                    var locks_hash = new Array();
                    locks_hash = JSON.parse( sessionStorage.getItem("Data") );
                    User_list = new Array();

                    for (var a = 0; a < locks_hash.length; a++) {

                        var b = locks_hash[a]; User_list.push( b["User_Lock"] );

                    }; locks_hash = User_list; User_list = null;

                    do {

                        var user_lock = document.getElementById('userlock').value;

                        if ( user_lock != null ) {

                            if ( user_lock == locks_hash[check] ) {

                                //Correct User Lock Entered... User Recognised...!!!

                                if ( sessionStorage.getItem( 'Files' ) ) {

                                    sessionStorage.removeItem( 'Files' );

                                };

                                localStorage.setItem("Amount_MB", check);
                                location.href = "./OS_Loader.html";

                            } else if ( user_lock.toLowerCase() == "./exit" ) {

                                /* Stop it and return */ return 9211;

                            } else { return alert("Incorrect User Lock Entered..."); };

                        } else { return 9211; };
                        
                    } while ( ! ( user_lock == locks_hash[check] ) );

                } else {

                    //No User Lock for the Public User Owner...

                    localStorage.setItem("Amount_MB", 0);
                    location.href = "OS_Loader.html";

                }; return;

            }; //Do not Return Anything just add 1 to check variable

        }; return alert("User ID not Available");

    };

};