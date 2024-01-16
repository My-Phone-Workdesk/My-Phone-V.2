window.onload = () => {

    if ( location.pathname.includes( 'iMobile_Pay.html' ) ) {

        var option_1 = document.getElementById( 'option-1' );
        var option_2 = document.getElementById( 'option-2' );
        var option_3 = document.getElementById( 'option-3' );

        var modal_close_button = document.getElementById( 'closeModal' );
        var modal_switch_tab_signup = document.getElementById( 'switchTabSU' );
        var modal_switch_tab_signin = document.getElementById( 'switchTabSI' );
        var signup_button = document.getElementById( 'signupbutton' );
        var signin_button = document.getElementById( 'signinbutton' );

        var modal = document.getElementById( 'SignInAndUpModal' );

        modal.addEventListener( 'click', () => {

            return modal.style.display = 'none';

        });

        option_3.addEventListener( 'click', () => {

            return location.assign( './Change_Details.html' );

        });

        option_2.addEventListener( 'click', () => {

            return openModal( 'signup' );

        });

        option_1.addEventListener( 'click', () => {

            return openModal( 'signin' );

        });

        modal_close_button.addEventListener( 'click', () => {

            return closeModal();

        });

        modal_switch_tab_signup.addEventListener( 'click', () => {

            return switchTab('signin');

        });

        modal_switch_tab_signin.addEventListener( 'click', () => {

            return switchTab('signup');

        });

        signup_button.addEventListener( 'click', () => {

            return SignUp();

        });

        signin_button.addEventListener( 'click', () => {

            return SignIn();

        });

    } else if ( location.pathname.includes( 'Change_Details.html' ) ) { 

        var changeDetailsButton = document.getElementById( 'changeDetails' );

        changeDetailsButton.addEventListener( 'click', () => {

            return changeDetails();

        });

        const checkboxes = document.querySelectorAll( 'input[type="checkbox"]' );
    
        checkboxes.forEach( ( checkbox ) => {

            checkbox.addEventListener( 'change', () => {

                const inputId = checkbox.id.replace( 'Checkbox', 'Input' );
                const input = document.getElementById( inputId );
                input.disabled = !checkbox.checked;
                
                if ( input.disabled == false ) { input.className = 'change_it'; }
                else { input.removeAttribute( 'class' ); };

            });

        });

    };

};

function changeDetails() {

    const Accounts_Data = JSON.parse( sessionStorage.getItem( 'Accounts_Data' ) );

    var All_Branch_Codes = new Array();

    for ( var a = 0; a < Accounts_Data.length; a++ ) {

        All_Branch_Codes.push( parseFloat( Accounts_Data[ a ][ 'Branch_Code' ] ) );

    };
    
    // FOR AB ----> Get all input values
    // From AB ----> Do like this only in every script
    // But 1 line space between comments and code 😅

    var name = document.getElementById( 'nameInput' );
    var username = document.getElementById( 'usernameInput' );
    var password = document.getElementById( 'passwordInput' );
    var securityCode = document.getElementById( 'securityCodeInput' );
    var mobileNumber = document.getElementById( 'mobileNumberInput' );
    var branchCode = document.getElementById( 'branchCode' ).value;

    if ( branchCode != '' ) {
        
        branchCode = parseFloat( branchCode );
    
    } else {
        
        return alert( '\n' + 'Please Fill up your Branch Code ! Its Neccessary for changing your details...' );
    
    };

    /* FOR AB ----> Perform authentication using branch code
    (You can replace this with your own authentication logic) --> From Ab ----> Okay 👍 */

    if ( All_Branch_Codes.indexOf( branchCode ) == -1 ) {

        return alert( 'Authentication failed. Please enter the correct branch code.' );

    } else {

        /* FOR AB ----> Your logic to update the account details goes here
        From AB ----> Thank You for that 🙏 */

        var change_details_properties = new Object();

        if ( name.className == 'change_it' ) {

            change_details_properties.name = name.value;

        }; if ( username.className == 'change_it' ) {

            change_details_properties.username = username.value;

        }; if ( password.className == 'change_it' ) {

            change_details_properties.password = password.value;

        }; if ( securityCode.className == 'change_it' ) {

            change_details_properties.securityCode = securityCode.value;

        }; if ( mobileNumber.className == 'change_it' ) {

            change_details_properties.mobileNumber = mobileNumber.value;

        }; const new_data = Change_for_Each_Detail( Object.keys( change_details_properties ) );

        sessionStorage.setItem( 'Accounts_Data', JSON.stringify( new_data[ 0 ] ) );

        var data_to_upload_on_server = new_data[ 1 ];

        return alert('Account details changed successfully!');

    };

    function Change_for_Each_Detail( Detailed_list ) {

        var new_data = JSON.parse( sessionStorage.getItem( 'Accounts_Data' ) );

        var changing_account = new_data[ All_Branch_Codes.indexOf( branchCode ) ];
    
        if ( Detailed_list.indexOf( 'name' ) != -1 ) {
         
            changing_account.Name = change_details_properties.name;

        }; if ( Detailed_list.indexOf( 'username' ) != -1 ) {

            changing_account.Username = change_details_properties.username;

        }; if ( Detailed_list.indexOf( 'password' ) != -1 ) {

            changing_account.Password = change_details_properties.password;

        }; if ( Detailed_list.indexOf( 'securityCode' ) != -1 ) {

            changing_account.Security_Code = change_details_properties.securityCode;

        }; if ( Detailed_list.indexOf( 'mobileNumber' ) != -1 ) {

            changing_account.Mobile_Number = change_details_properties.mobileNumber;

        };

        return [ new_data, changing_account ];

    };

};

function openModal( tabName ) {

    var modal = document.getElementById( 'SignInAndUpModal' );

    modal.style.display = 'block';

    document.getElementById( 'signin' ).style.display = tabName === 'signin' ? 'block' : 'none';
    document.getElementById( 'signup' ).style.display = tabName === 'signup' ? 'block' : 'none';

    // Ohh ! The Above code is done in an advanced and 100% brain use way of javascript...

};

function closeModal() {

    var modal = document.getElementById( 'SignInAndUpModal' );

    modal.style.display = 'none';

};

function switchTab( tabName ) {

    var signinTab = document.getElementById( 'signin' );
    var signupTab = document.getElementById( 'signup' );

    if ( tabName === 'signin' ) {

        signinTab.style.display = 'block';
        signupTab.style.display = 'none';

    } else if ( tabName === 'signup' ) {

        signinTab.style.display = 'none';
        signupTab.style.display = 'block';

    };

};

function SignIn() {

    return window.location.assign( './Account.html' );

};

function SignUp() {

    return alert( 'Your Branch Code is 9211' );

};