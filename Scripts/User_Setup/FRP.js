// Imported Functions From Database ==>

import { Database } from "../../Data_Resources/Database.js";

import { give_alert } from "../Alert.js";

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'Finish.html' ) ) { Finish(); }

    else if ( location.pathname.includes( 'Conditions.html' ) ) {

        let check_boxes = document.querySelectorAll( '#check_rule' );
        
        for ( var a = 0; a < check_boxes.length; a++ ) {

            check_boxes[ a ].addEventListener( 'click', Check );

        };

    } else if ( location.pathname.includes( 'FRP.html' ) ) {

        let Click = document.getElementById( 'Click' );
        Click.addEventListener( 'click', Welcome );

    } else if ( location.pathname.includes( 'Account.html' ) ) {

        let Account_Button = document.getElementById( 'Account_Button' );
        Account_Button.addEventListener( 'click', Account );

    };

};

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

};

function Account() {

    let details = document.querySelectorAll('input');
    let email = details[0].value;
    let password = details[1].value;
    let Data = JSON.parse( sessionStorage.getItem("Accounts_Data") );

    let Emails = new Array();
    let Users_Data = JSON.parse( sessionStorage.getItem("Data") );

    if ( Users_Data == null ) {

        return give_alert( "Missing Data Please Go to Home Page...", () => { return false; });

    } else {

        for ( var u = 0; u < Users_Data.length; u++ ) { Emails.push( Users_Data[u]["Account"] ); }
        
        if ( Users_Data.includes(email) ) {

            return give_alert(
                
                "Please Use a New E-mail... This E-mail is already in use !!! ", () => { return false; }
                
            );

        };

    };

    if ( Data == null ) {

        return give_alert( "Missing Data Please Go to Home Page...", () => { return false; });

    } else if ( email == '' || email == null || password == null || password == '' ) {

        return give_alert(
            
            "Please Fill Both the Information 'Username' and 'Password' ..!! ", () => { return false; }

        );

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

                    return give_alert( "Incorrect Password ! Please Try Again...", () => { return false; });

                };

            }; // Move ahead this was not the email matched...

        }; return give_alert(
            
            "Sorry this Email wasn't Found on the Server...", () => { return location.reload(); }
            
        );

    };

};

function Finish() {

    const Default_Storage = [

        {

            Name:'Drive C:',
            Extention:'folder',
            Access:'Block',
            Hidden:'true',
            Folder:{

                Access:'Allow',
                Hidden:'false'

            }

        }, [

            {

                Name:'System Apps',
                Extention:'folder',
                Access:'Block',
                Hidden:'true',
                Folder:{

                    Access:'Block',
                    Hidden:'true'

                }

            }, {

                Name:'Play Store',
                Extention:'sys',
                Access:'Block',
                Hidden:'true'

            }, {

                Name:'Settings',
                Extention:'sys',
                Access:'Block',
                Hidden:'true'

            }, {

                Name:'File Manager',
                Extention:'sys',
                Access:'Block',
                Hidden:'true'

            }, {

                Name:'CMD',
                Extention:'sys',
                Access:'Block',
                Hidden:'true'

            }

        ], [

            {

                Name:'Apps',
                Extention:'folder',
                Access:'Block',
                Hidden:'true',
                Folder:{

                    Access:'Block',
                    Hidden:'true'

                }

            }
            
        ]

    ];
    
    setTimeout( () => {

        var details = new Array();
        details.push( "User" );
        details.push( "User_Lock" );
        details.push( "BIOS" );
        details.push( "Firmware" );
        details.push( "Firmware_Version" );
        details.push( "Device" );
        details.push( "Account" );
        details.push( "ROM" );
        details.push( "Unit" );

        let para = undefined;
        para = document.createElement('p');
        para.innerHTML = 'Connecting to the Server...'
        document.body.appendChild(para);
        
        let Data = JSON.parse( localStorage.getItem("Add_User") );
        
        for ( var v = 0; v < Object.keys( Data ).length; v++) {

            if ( ( Object.keys( Data ).indexOf( details[v] ) ) == -1 ) {

                return give_alert(
                    
                    'Your Some Data is Missing ! May be you have left some steps... Please Restart Add' +
                    
                    'User from Home Page... Your Money would be Lost :( ', () => {

                        return window.location.assign( '../../../index.html' );

                    }
                    
                );

            }; // To check that all Data is present or Not !

        }; var _User_ID_ = ( JSON.parse( sessionStorage.getItem("Data") ) ).length;

        var order = new Array();

        for ( var f = 0; f < Object.keys( Data ).length; f++ ) {
            
            order.push( Data[ details[f] ] );

        }; Data = order; order = null; Data.unshift( _User_ID_ );

        if ( sessionStorage.getItem( 'Files' ) == null ) { Database.Read_Data( 'Files', 'Files' ); };

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

            var Files = new Array();
            var No_Data = Default_Storage;
            No_Data = JSON.stringify( No_Data );
            No_Data = Database.Json.Files_Method( No_Data );

            Files.push( Data[ 1 ] ); Files.push( No_Data );
            Files.push( Data[ Data.length - 2 ] );

            var used_space = Database.Json.Unit_Converter( 'MB', Data[ Data.length - 1 ], 5 );

            if ( used_space == -1 ) {
                
                return give_alert( 'Your Provided Storage Unit is Invalid', () => {

                    return give_alert(
                        
                        'You have to Correct your Certificate and Restart from OS Setup', () => {

                            return give_alert(
                                
                                'Your Money will not be lost if you restart from OS Setup...', () => {

                                    return window.location.assign(
                                        
                                        '../../../OS_Package/OS_Setup/OS_Setup.html'
                                        
                                    );

                                }
                                
                            );

                        }
                    );

                });
            
            }; Files.push( used_space[ 0 ] );

            var this_row = sessionStorage.getItem( 'Files' );

            if ( this_row == null ) { location.reload(); };

            this_row = JSON.parse( this_row );
            this_row = this_row.length + 2;

            sessionStorage.removeItem( 'Files' );

            Files.push( '=C' + this_row + '-D' + this_row );

            Files.push( Data[ Data.length - 1 ] );

            Files.push( '=(D' + this_row + '/C' + this_row + ')*100' );
            Files.push( '=(E' + this_row + '/C' + this_row + ')*100' );

            Data.pop(); Data.pop();

            setTimeout( () => {

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

                    Database.Create_Data( 'User_Accounts', Data );

                    setTimeout( () => {

                        Database.Create_Data( 'Files', Files );

                        para = document.createElement('p');
                        para.innerHTML = 'Disconnected From the Server !!! ';
                        document.body.appendChild(para);

                        setTimeout( () => {

                            return give_alert(
                                
                                "Congratulations ! Your User Successfully Created on Server", () => {

                                    sessionStorage.removeItem( 'DATABASE' );
                                    sessionStorage.removeItem( 'Data' );
                                    sessionStorage.removeItem( 'Accounts_Data' );
                                    
                                    return window.location.assign( '../../../index.html' );

                                }
                                
                            );

                        },1000 );

                    },2000 );

                },1000 );

            },3000 );

        },2000 );

    },3000 );

};