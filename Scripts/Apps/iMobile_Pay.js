window.onload = () => {

    if ( location.pathname.includes( 'iMobile_Pay.html' ) ) {

        var option_1 = document.getElementById( 'option-1' );
        var option_2 = document.getElementById( 'option-2' );
        var option_3 = document.getElementById( 'option-3' );

        option_3.addEventListener( 'click', () => {

            return location.assign( 'Change_Details.html' );

        });

        option_2.addEventListener( 'click', () => {

            return location.assign( 'Sign_In&Up.html?sign_up' );

        });

        option_1.addEventListener( 'click', () => {

            return location.assign( 'Sign_In&Up.html?sign_in' );

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
                input.className = 'change_it';

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

    var name = document.getElementById( 'nameInput' ).value;
    var username = document.getElementById( 'usernameInput' ).value;
    var password = document.getElementById( 'passwordInput' ).value;
    var securityCode = document.getElementById( 'securityCodeInput' ).value;
    var mobileNumber = document.getElementById( 'mobileNumberInput' ).value;
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



    };

    // FOR AB ----> Your logic to update the account details goes here
    // From AB ----> Thank You for that 🙏

    return alert('Account details changed successfully!');

};