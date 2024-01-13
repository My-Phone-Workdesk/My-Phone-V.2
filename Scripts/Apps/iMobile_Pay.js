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

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                const inputId = this.id.replace('Checkbox', 'Input');
                const input = document.getElementById(inputId);
                input.disabled = !this.checked;
            });
        });

    };

};

function changeDetails() {
    
    // FOR AB ----> Get all input values
    var name = document.getElementById('nameInput').value;
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var securityCode = document.getElementById('securityCodeInput').value;
    var mobileNumber = document.getElementById('mobileNumberInput').value;
    var branchCode = document.getElementById('branchCode').value;

    // FOR AB ----> Perform authentication using branch code (You can replace this with your own authentication logic)
    if (branchCode !== '9211') {
        alert('Authentication failed. Please enter the correct branch code.');
        return;
    }

    // FOR AB ----> Your logic to update the account details goes here

    alert('Account details changed successfully!');
}
