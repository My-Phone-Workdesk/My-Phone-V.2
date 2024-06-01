// Imported Functions From Database and Other Services ==>

import { Database } from '../../Data_Resources/Database.js';

import { give_alert } from '../Alert.js';

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'iMobile_Pay.html' ) ) {

        if ( sessionStorage.getItem( 'confirmation' ) != null ) {

            sessionStorage.removeItem( 'confirmation' );

        };

        var modal = document.getElementById( 'SignInAndUpModal' );

        var option_1 = document.getElementById( 'option-1' );
        var option_2 = document.getElementById( 'option-2' );
        var option_3 = document.getElementById( 'option-3' );

        var modal_close_button = modal.querySelector( 'span' );
        var modal_switch_tab_signup = document.getElementById( 'switchTabSU' );
        var modal_switch_tab_signin = document.getElementById( 'switchTabSI' );
        var signup_button = document.getElementById( 'signupbutton' );
        var signin_button = document.getElementById( 'signinbutton' );

        var sign_in = document.getElementById( 'signin' );
        var sign_up = document.getElementById( 'signup' );

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

            sign_in.style.visibility = 'hidden';
            sign_up.style.visibility = 'hidden';

            modal.style.visibility = 'hidden';
            modal.className = 'modal';

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
                input.innerText = "";
                
                if ( input.disabled == false ) { input.className = 'change_it'; }
                else { input.removeAttribute( 'class' ); };

            });

        });

    } else if ( location.pathname.includes( 'Delete_Account.html' ) ) {

        const confirmation = JSON.parse( sessionStorage.getItem( 'confirmation' ) );
        sessionStorage.removeItem( 'confirmation' );

        var button = document.body.querySelector( 'button' );
        var span = document.body.querySelector( 'span' );

        button.addEventListener( 'click', () => {

            const inputs = document.body.querySelectorAll( 'input' );
            const password = ( inputs[ 0 ].value );
            const branchCode = parseFloat( inputs[ 1 ].value );
            
            if ( password === parseFloat( confirmation.password ) ) {

                if ( branchCode === parseFloat( confirmation.branchCode ) ) {

                    span.innerHTML = ''; return Delete_Account();

                } else {

                    return span.innerHTML = 'Branch Code is incorrect... Please Try Again ! ';

                };

            } else {

                return span.innerHTML = 'Password is incorrect... Please Try Again ! ';

            };

        });

    } else if ( location.pathname.includes( 'Account.html' ) ) {

        const Accounts_Data = JSON.parse( sessionStorage.getItem( 'Accounts_Data' ) );
        var account = parseFloat( sessionStorage.getItem( 'Logged_In_Account' ) );

        sessionStorage.removeItem( 'Logged_In_Account' );

        account = Accounts_Data[ account ];

        var showBranchCodeButton = document.getElementById( 'showBranchCodeButton' );
        var branchCodeText = document.getElementById( 'branchCodeText' );

        var name = document.getElementById( 'name' );
        var username = document.getElementById( 'username' );
        var security_code = document.getElementById( 'security_code' );
        var Mobile_Number = document.getElementById( 'Mobile_Number' );

        name.innerHTML = account[ 'Name' ];
        username.innerHTML = account[ 'Username' ];
        security_code.innerHTML = 'Security Code --> ' + account[ 'Security_Code' ];
        Mobile_Number.innerHTML = 'Mobile No. --> +91 ' + account[ 'Mobile_Number' ];

        showBranchCodeButton.addEventListener( 'click', () => {

            if ( branchCodeText.innerHTML == 'Hide Branch Code' ) {

                branchCodeText.innerText = 'Show Branch Code';

                return HideBranchCode();

            } else {

                branchCodeText.innerText = 'Hide Branch Code';

                return ShowBranchCode( account[ 'Branch_Code' ] );

            };

        });

        const confirmation = new Object();

        confirmation.password = account[ 'Password' ];
        confirmation.securityCode = account[ 'Security_Code' ];

        return sessionStorage.setItem( 'confirmation', JSON.stringify( confirmation ) );

    };

};

function changeDetails() {

    const Accounts_Data = JSON.parse( sessionStorage.getItem( 'Accounts_Data' ) );

    var All_Branch_Codes = new Array();

    for ( var a = 0; a < Accounts_Data.length; a++ ) {

        All_Branch_Codes.push( parseFloat( Accounts_Data[ a ][ 'Branch_Code' ] ) );

    };

    var name = document.getElementById( 'nameInput' );
    var username = document.getElementById( 'usernameInput' );
    var password = document.getElementById( 'passwordInput' );
    var securityCode = document.getElementById( 'securityCodeInput' );
    var mobileNumber = document.getElementById( 'mobileNumberInput' );
    var branchCode = document.getElementById( 'branchCode' ).value;

    if ( branchCode != '' ) {
        
        branchCode = parseFloat( branchCode );
    
    } else {
        
        return give_alert(
            
            '\n' + 'Please Fill up your Branch Code ! Its Neccessary for changing your details...',

            () => { return true; }
            
        );
    
    };

    if ( All_Branch_Codes.indexOf( branchCode ) == -1 ) {

        return give_alert( 'Authentication failed. Please enter the correct branch code.', () => {});

    } else {

        const row = All_Branch_Codes.indexOf( branchCode ) + 2;
        
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

            change_details_properties.mobileNumber = parseFloat( mobileNumber.value );

        };
        
        const new_data = Change_for_Each_Detail( Object.keys( change_details_properties ) );

        sessionStorage.setItem( 'Accounts_Data', JSON.stringify( new_data[ 0 ] ) );

        var data_to_upload_on_server_in_object_form = new_data[ 1 ];

        var data_to_upload_on_server_in_array_form = [

            data_to_upload_on_server_in_object_form.Name,
            data_to_upload_on_server_in_object_form.Security_Code,
            data_to_upload_on_server_in_object_form.Username,
            data_to_upload_on_server_in_object_form.Password,
            data_to_upload_on_server_in_object_form.Mobile_Number

        ];

        data_to_upload_on_server_in_array_form = Database.Json.stringify(

            data_to_upload_on_server_in_array_form

        );

        Database.Update_Multi_Data( 'Accounts', 'A' + row + ':E' + row, data_to_upload_on_server_in_array_form );
        
        return give_alert( 'Your provided account details successfully changed !', () => {

            document.body.style.cursor = 'none';

            setTimeout( () => {

                document.body.style.cursor = 'Default';

                return window.location.assign( './iMobile_Pay.html' );

            },3000 );

        });

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

    var sign_in = document.getElementById( 'signin' );
    var sign_up = document.getElementById( 'signup' );

    modal.style.visibility = 'visible';
    modal.className = 'model';

    if ( tabName == 'signin' ) {

        sign_in.style.visibility = 'visible';

        modal.style.top = '20vh';
        modal.style.height = '65vh';
        modal.style.width = '25vw';

    } else if ( tabName == 'signup' ) {

        sign_up.style.visibility = 'visible';

        modal.style.top = '5vh';
        modal.style.height = '75vh';
        modal.style.width = '30vw';

    };

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

    var sign_in = document.getElementById( 'signin' );
    var inputs = sign_in.querySelectorAll( 'input' );

    var username = inputs[ 0 ].value;
    var password = inputs[ 1 ].value;

    const Accounts_Data = JSON.parse( sessionStorage.getItem( 'Accounts_Data' ) );

    var Usernames = new Array();
    var Passwords = new Array();

    for ( var a = 0; a < Accounts_Data.length; a++ ) {

        Usernames.push( Accounts_Data[ a ][ 'Username' ] );
        Passwords.push( Accounts_Data[ a ][ 'Password' ] );

    };

    var any_notification = sign_in.querySelector( 'span' );

    if ( Usernames.indexOf( username ) == -1 ) {

        return any_notification.innerHTML = 'Sorry ! We are not able to find the Account with this Username...';

    } else {

        any_notification.innerHTML = '';

        if ( password === Passwords[ Usernames.indexOf( username ) ] ) {

            any_notification.innerHTML = '';

            setTimeout( () => {

                sessionStorage.setItem( 'Logged_In_Account', Usernames.indexOf( username ) );

                return window.location.assign( './Account.html' );

            },500 ); // Animation...

        } else {

            return any_notification.innerHTML = 'Incorrect Password entered ! ';

        };

    };

};

function SignUp() {

    return give_alert( 'Your Branch Code is 9211', () => { return true; } );

};

function ShowBranchCode( branchCode ) {

    branchCode = branchCode.toString();

    var branchCode1 = document.getElementById( 'branchCode1' );
    var branchCode1Span = document.getElementById( 'branchCode1Span' );
    var branchCode2 = document.getElementById( 'branchCode2' );
    var branchCode2Span = document.getElementById( 'branchCode2Span' );
    var branchCode3 = document.getElementById( 'branchCode3' );
    var branchCode3Span = document.getElementById( 'branchCode3Span' );
    var branchCode4 = document.getElementById( 'branchCode4' );
    var branchCode4Span = document.getElementById( 'branchCode4Span' );

    branchCode1.innerText = '';
    branchCode2.innerText = '';
    branchCode3.innerText = '';
    branchCode4.innerText = '';
    
    branchCode1.appendChild( branchCode1Span );
    branchCode2.appendChild( branchCode2Span );
    branchCode3.appendChild( branchCode3Span );
    branchCode4.appendChild( branchCode4Span );

    branchCode1Span.innerText = branchCode.charAt( 0 );
    branchCode2Span.innerText = branchCode.charAt( 1 );
    branchCode3Span.innerText = branchCode.charAt( 2 );
    branchCode4Span.innerText = branchCode.charAt( 3 );

};

function HideBranchCode() {

    var branchCode1 = document.getElementById( 'branchCode1' );
    var branchCode2 = document.getElementById( 'branchCode2' );
    var branchCode3 = document.getElementById( 'branchCode3' );
    var branchCode4 = document.getElementById( 'branchCode4' );

    branchCode1.innerHTML = '<span id="branchCode1Span">!</span>Branch';
    branchCode2.innerHTML = '<span id="branchCode2Span">!</span>Code';
    branchCode3.innerHTML = '<span id="branchCode3Span">!</span>is';
    branchCode4.innerHTML = '<span id="branchCode4Span">!</span>Hidden';

};

function Delete_Account() {

    return give_alert( 'Your Account Successfully Deleted ! ', () => {

        return window.location.assign( './iMobile_Pay.html' );

    });

};