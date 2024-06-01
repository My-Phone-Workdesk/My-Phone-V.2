// Exported Functions From Database ==>

import { Database } from '../Data_Resources/Database.js';

import { give_alert } from './Alert.js';

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'OS_Setup.html' ) ) {

        OS_Options();

        let OS_file = document.getElementById( 'OS_File' );
        OS_file.addEventListener( 'change', Check_OS );

        let OS_certificate = document.getElementById( 'OS_Certificate' );
        OS_certificate.addEventListener( 'change', Check_Certificate );

        let submit = document.getElementById( 'Submit' );
        submit.addEventListener( 'click', Submit_OS );

    };

};

function OS_Options() {

    sessionStorage.setItem( "device_type", localStorage.getItem("device_type") );

    let OS_Select = document.getElementById('OS_select');
    let device_type = sessionStorage.getItem("device_type");

    if (device_type == "Desktop" || device_type == "Laptop" || device_type == "Notepad") {

        let Windows = document.createElement('option');
        Windows.text = "Windows";
        OS_Select.add(Windows);

        let Mac = document.createElement('option');
        Mac.text = "Mac";
        OS_Select.add(Mac);

        let Linux = document.createElement('option');
        Linux.text = "Linux";
        OS_Select.add(Linux);

    } else {

        let Andos = document.createElement('option');
        Andos.text = "Andos";
        OS_Select.add(Andos);

        let Android = document.createElement('option');
        Android.text = "Android";
        OS_Select.add(Android);

        let IOS = document.createElement('option');
        IOS.text = "IOS";
        OS_Select.add(IOS);

    }; sessionStorage.removeItem("device_type"); sessionStorage.removeItem("Amount_MB");

};

function Check_OS() {

    let file = document.getElementById('OS_File');
    let value = file.files[0].name;
    let text = document.getElementById('display_text_os');

    if ( value.slice(-4) == '.bin' ) {

        text.innerHTML = "Valid File, Supported ✅";
        sessionStorage.setItem('device_type', true);

    } else {

        text.innerHTML = "Invalid File, Not Supported...!!! ❌";
        sessionStorage.setItem('device_type', false);

    };

};

function Check_Certificate() {

    let file = document.getElementById('OS_Certificate');
    let value = file.files[0].name;
    let text = document.getElementById('display_text_cert');

    if ( value.slice(-4) == '.txt' || value.slice(-4) == '.crt' ) {

        text.innerHTML = "Valid File, Supported ✅";
        sessionStorage.setItem('Amount_MB', true);

    } else {

        text.innerHTML = "Invalid File, Not Supported...!!! ❌";
        sessionStorage.setItem('Amount_MB', false);

    };

};

function Submit_OS() {

    let text = document.getElementById('Response');
    var OS = sessionStorage.getItem("device_type");
    var Certificate = sessionStorage.getItem("Amount_MB");

    if ( OS == 'true' && Certificate == 'true' ) {

        text.innerHTML = "File Uploaded to Server...";
        var check = document.getElementById('continue.com');

        if ( check == null ) {

            let final = document.createElement('button');
            final.textContent = "Done and Continue Ahead --> ";
            final.id = "continue.com";

            document.body.appendChild(final);

            final.addEventListener( 'click', Check_Document );

        } else {

            let remove = document.getElementById('next.com');

            if ( remove != null ) { remove.remove(); }

        };

    } else { text.innerHTML = "Cert/OS Setup file is not present or is corrupted"; }

};

function Check_Document() {

    let document_certificate = document.getElementById('OS_Certificate');

    var document_data = new FileReader();
    var file = document_certificate.files[0];

    document_data.readAsText(file);

    var text_data = new Array();
    document_data.result;

    document_data.onload = () => {

        text_data.push( document_data.result );
        text_data = text_data[0].split('\r\n');
        text_data = JSON.stringify(text_data);

        sessionStorage.setItem("Certificate", text_data);
        var check = document.getElementById('next.com');
        
        if ( check == null ) {

            let space = document.createElement('pre');
            space.innerHTML = "             ";
            space.style.display = "inline-block";
            document.body.appendChild(space);

            let _Confirm = document.createElement('button');
            _Confirm.textContent = "Next ==> ";
            _Confirm.style.display = "inline-block";
            _Confirm.id = 'next.com';
            document.body.appendChild(_Confirm);

            _Confirm.addEventListener('click', () => {

                Next(); _Confirm.remove();

                if ( sessionStorage.getItem("Check") != 'false' ) {

                    var _Confirm_ = confirm("Are you Sure to Finally Submit ? This Action can't be Undone ❗ ");

                    if ( _Confirm_ ) {

                        sessionStorage.removeItem("Check");
                        sessionStorage.removeItem("device_type");
                        sessionStorage.removeItem("Amount_MB");
                        sessionStorage.removeItem("Certificate");

                        return window.location.assign(
                            
                            '../../Screen/User_Setup/Create_User_Profile.html'
                            
                        );

                    } else { location.reload(); }

                } else { sessionStorage.setItem("Check", true); }

            });

        } else { check.remove(); }

    };

    document_data.onerror = function () { console.log( document_data.error ); }

};

function Next() {

    var file_data = new Array();
    file_data = JSON.parse( sessionStorage.getItem("Certificate") );
    
    if ( ! ( file_data[0] == '--- Start ---' && file_data[file_data.length - 1] == '--- End ---') ) {

        return give_alert( "The Certificate is not Suitable for your System...", () => {

            sessionStorage.setItem( 'Check' , false ); return location.reload();

        });
        
    } else {

        for (var msi = 0; msi < file_data.length; msi++) { Program( file_data[msi] ); }

        var Account = localStorage.getItem( 'Add_User' );
        Account = JSON.parse( Account );

        delete Account.Payment;

        Account = JSON.stringify( Account );
        localStorage.setItem( 'Add_User', Account );
    
    };

};

function Program( Code ) {
    
    var part = null;

    if ( Code.toLowerCase().includes('User.BIOS.set <===> '.toLowerCase() ) ) {
        
        part = Code.slice(20);
        var put = JSON.parse( localStorage.getItem("Add_User") );
        put["BIOS"] = part;
        put = JSON.stringify(put);
        localStorage.setItem("Add_User", put);

    } else if ( Code.toLowerCase().includes('User.Certify <===> '.toLowerCase() ) ) {
        
        part = Code.slice(19);

        var option = document.getElementById('OS_select');
        option = option.value;

        var file = document.getElementById('OS_File');
        file = file.files[0].name;
        file = file.slice(0, -4);

        var Certificate = document.getElementById('OS_Certificate');
        Certificate = Certificate.files[0].name;
        Certificate = Certificate.slice(0, -4);
        
        if ( part == file) {
            
            if ( part == option ) {
                
                if ( part == Certificate ) {

                    var put = JSON.parse( localStorage.getItem("Add_User") );
                    put["Firmware"] = part;
                    put = JSON.stringify(put);
                    localStorage.setItem("Add_User", put);

                } else {

                    return give_alert( 'Your Uploaded OS Certificate is not Correct...', () => {

                        sessionStorage.setItem( 'Check', false ); return location.reload();

                    });

                };

            } else {

                return give_alert( 'Your Selected OS is not Correct...', () => {

                    sessionStorage.setItem( 'Check', false ); return location.reload();

                });

            };

        } else {

            return give_alert( 'Your Uploaded OS File is not Valid...', () => {

                sessionStorage.setItem( 'Check', false ); return location.reload();

            });

        };

    } else if ( Code.toLowerCase().includes('User.Version <===> '.toLowerCase() ) ) {

        part = Code.slice(19);
        var put = JSON.parse( localStorage.getItem("Add_User") );
        put["Firmware_Version"] = part;
        put = JSON.stringify(put);
        localStorage.setItem("Add_User", put);

    } else if ( Code.toLowerCase().includes( 'User.Mother-Board.Type <===> '.toLowerCase() ) ) {

        part = Code.slice( 29 );

        var Account = localStorage.getItem( 'Add_User' );
        Account = JSON.parse( Account );
        var Payment_Check = Account.Payment;
        Account = Account.Device;

        if ( ! ( Payment_Check ) ) {

            if ( part == 'v500' && Account == 'Phone' ) { Set_Mother_Board_v( 500 ); }
            else if ( part == 'v800' && Account == 'Tablet' ) { Set_Mother_Board_v( 800 ); }
            else if ( part == 'v1000' && Account == 'Foldable' ) { Set_Mother_Board_v( 1000 ); }
            else if ( part == 'v1500' && Account == 'Notepad' ) { Set_Mother_Board_v( 1500 ); }
            else if ( part == 'v2000' && Account == 'Laptop' ) { Set_Mother_Board_v( 2000 ); }
            else if ( part == 'v4000' && Account == 'Desktop' ) { Set_Mother_Board_v( 4000 ); }
            else if ( part == 'v5000' && Account == 'Administrative Device' ) { Set_Mother_Board_v( 5000 ); }
            else {

                sessionStorage.setItem( 'Check', false );

                return give_alert(
                    
                    'The Mother Board of ' + part + ' is not suitable for your Device : ' + Account, () => {

                        return setTimeout( () => {

                            return give_alert( 'We are reloading this Screen so that you can edit or upload suitable' +
                            'OS again...', () => { return location.reload(); });

                        },500 );

                    }
                
                );
            
            };

        } else { /* Ignore if already payed... */ };

        function Set_Mother_Board_v( v ) {

            var Access_Account = localStorage.getItem( 'Add_User' );
            Access_Account = JSON.parse( Access_Account );

            Access_Account.Payment = v * 0.1;

            Access_Account = JSON.stringify( Access_Account );
            localStorage.setItem( 'Add_User', Access_Account );

        };

    } else if ( Code.toLowerCase().includes( 'User.Mother-Board.Access-Security-Code <==> '.toLowerCase() ) ) {

        var Account = localStorage.getItem( 'Add_User' );
        Account = JSON.parse( Account );
        Account = Account.Payment;

        if ( Account == true ) { /* Ignore if already payed... */ }
        else {

            part = Code.slice( 44 );
            part = parseInt( part );

            var Access_Account = localStorage.getItem( 'Add_User' );
            Access_Account = JSON.parse( Access_Account );
            Access_Account = Access_Account.Payment;

            if ( sessionStorage.getItem( 'Accounts_Data' ) != null ) {

                var Security_Codes = sessionStorage.getItem( 'Accounts_Data' );
                Security_Codes = JSON.parse( Security_Codes );
                
                var Security_Codes_Data = new Array();

                for ( var a = 0; a < Security_Codes.length; a++ ) {
                    
                    Security_Codes_Data.push( Security_Codes[ a ][ 'Security_Code' ] );
                
                }; if ( Security_Codes_Data.indexOf( part ) == -1 ) {

                    sessionStorage.setItem( 'Check', false );

                    return give_alert(
                        
                        'The Mother Board Access Security Code is not Valid... Try changing that ❗ ', () => {

                            return location.reload();

                        }
                    
                    );

                } else if ( Security_Codes_Data.indexOf( part ) == 0 ) {

                    sessionStorage.setItem( 'Check', false );

                    return give_alert( 'You cannot use Government Financial Security Code for that...', () => {

                        return location.reload();

                    });

                } else {

                    var Money = Security_Codes[ Security_Codes_Data.indexOf( part ) ][ 'Money' ];
                    Money = parseFloat( Money );

                    if ( Money >= Access_Account ) {

                        Money -= Access_Account;
                        Access_Account = Database.Json.Stringify_Column( 'Money', 'Accounts_Data' );

                        if ( Access_Account == -1 ) {

                            sessionStorage.setItem( 'Check', false );

                            return give_alert( 'Sorry ! An Error Occured, But your Money will not lose', () => {

                                return setTimeout( () => {

                                    return give_alert( 'We are Redirecting you to Home Screen...', () => {

                                        return window.location.assign( '../../index.html' );
    
                                    });

                                },500 );

                            });

                        };

                        Database.Update_Data( 'Accounts', Access_Account + ( Security_Codes_Data.indexOf( part ) + 2 ), Money );

                        Access_Account = null;

                    } else {

                        sessionStorage.setItem( 'Check', false );

                        return give_alert(
                            
                            "Sorry, You can't Proceed ahead due to insufficient Account Balance", () => {

                                return location.reload();

                            }
                            
                        );

                    };

                };

            } else {

                sessionStorage.setItem( 'Check', false );

                return give_alert( 'Sorry ! But due to your "/exit" command the data has been wipe out...', () => {

                    return setTimeout( () => {

                        return give_alert(
                            
                            'So, You need to do the Setup from the Starting as your Money will not lose :)', () => {

                                sessionStorage.clear(); return window.location.assign( '../../index.html' );

                            }
                            
                        );

                    },500 );

                });
            
            };

        };

    } else if ( Code.toLowerCase().includes( 'User.ROM <===> '.toLowerCase() ) ) {

        part = Code.slice( 15 );

        var Access_Account = localStorage.getItem( 'Add_User' );
        Access_Account = JSON.parse( Access_Account );

        Access_Account.ROM = part;

        Access_Account = JSON.stringify( Access_Account );
        localStorage.setItem( 'Add_User', Access_Account );

    } else if ( Code.toLowerCase().includes( 'User.Unit <===> '.toLowerCase() ) ) {

        part = Code.slice( 16 );

        var Access_Account = localStorage.getItem( 'Add_User' );
        Access_Account = JSON.parse( Access_Account );

        Access_Account.Unit = part;

        Access_Account = JSON.stringify( Access_Account );
        localStorage.setItem( 'Add_User', Access_Account );

    } else { /* Ignore as a Commentary Statement */ };

};