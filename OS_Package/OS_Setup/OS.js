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
    }
    sessionStorage.removeItem("device_type");
    sessionStorage.removeItem("Amount_MB");
}

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
    }
}

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
    }
}

function No_Cert() {

}
function No_OS() {

}

function Submit_OS() {
    let text = document.getElementById('Response');
    var OS = sessionStorage.getItem("device_type");
    var Certificate = sessionStorage.getItem("Amount_MB");
    if ( OS == 'true' && Certificate == 'true' ) {
        text.innerHTML = "File Uploaded to Server...";
        var check = document.getElementById('continue.com');
        if (check == null) {
            let final = document.createElement('button');
            final.textContent = "Done and Continue Ahead --> ";
            final.id = "continue.com";
            document.body.appendChild(final);
            final.addEventListener('click', function () {
                Check_Document();
            });
        } else {
            let remove = document.getElementById('next.com');
            if ( remove != null ) {
                remove.remove();
            }
        }
    } else {
        text.innerHTML = "Access to Server have been Denied...";
    }
}

function Check_Document() {

    let document_certificate = document.getElementById('OS_Certificate');
    var document_data = new FileReader();
    var file = document_certificate.files[0];
    document_data.readAsText(file);
    var text_data = new Array();
    document_data.result;

    document_data.onload = function () {
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
            _Confirm.addEventListener('click', function () {
                Next();
                _Confirm.remove();
                if ( sessionStorage.getItem("Check") != 'false' ) {
                    var _Confirm_ = confirm("Are you Sure to Finally Submit ? This Action can't be Undone ❗ ");
                    if ( _Confirm_ ) {
                        location.href = "../../Screen/User_Setup/Create_User_Profile.html";
                    } else {
                        location.reload();
                    }
                } else {
                    sessionStorage.setItem("Check", true);
                }
            });

        } else {
            check.remove();
        }
    }

    document_data.onerror = function () {
        console.log( document_data.error );
    }

}

function Next() {

    var file_data = new Array();
    file_data = JSON.parse( sessionStorage.getItem("Certificate") );
    
    if ( ! ( file_data[0] == '--- Start ---' && file_data[file_data.length - 1] == '--- End ---') ) {

        alert("The Certificate is not Suitable for your System...");
        sessionStorage.setItem("Check", false);
        location.reload();
        
    } else {
        
        for (var msi = 0; msi < file_data.length; msi++) {
            Program( file_data[msi] );
        }

    }

}

function Program(Code) {
    
    var part = null;

    if ( Code.toLowerCase().includes('User.BIOS.set <===> '.toLowerCase() ) ) {
        
        part = Code.slice(20);
        sessionStorage.setItem("BIOS", part);

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
                    sessionStorage.setItem("OS", part);
                } else {
                    alert('Your Uploaded OS Certificate is not Correct...');
                    sessionStorage.setItem("Check", false);
                    location.reload();
                }

            } else {
                alert('Your Selected OS is not Correct...');
                sessionStorage.setItem("Check", false);
                location.reload();
            }

        } else {
            alert('Your Uploaded OS File is not Valid...');
            sessionStorage.setItem("Check", false);
            location.reload();
        }

    }

}