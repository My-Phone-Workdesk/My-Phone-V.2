function OS_Options() {
    let OS_Select = document.getElementById('OS_select');
    let device_type = localStorage.getItem("device_type");
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
}

function Check_OS() {
    let file = document.getElementById('OS_File');
    let value = file.files[0].name;
    let text = document.getElementById('display_text');
    if ( value.slice(-4) == '.bin' ) {
        text.innerHTML = "Valid File, Supported ✅";
        localStorage.setItem('device_type', true);
    } else {
        text.innerHTML = "Invalid File, Not Supported...!!! ❌";
        localStorage.setItem('device_type', false);
    }
}

function Check_Certificate() {
    let file = document.getElementById('OS_Certificate');
    let value = file.files[0].name;
    let text = document.getElementById('text');
    if ( value.slice(-4) == '.txt' ) {
        text.innerHTML = "Valid File, Supported ✅";
        localStorage.setItem('Amount_MB', true);
    } else {
        text.innerHTML = "Invalid File, Not Supported...!!! ❌";
        localStorage.setItem('Amount_MB', false);
    }
}

function Submit_OS() {
    var OS = localStorage.getItem("device_type");
    var Certificate = localStorage.getItem("Amount_MB");
    if ( OS && Certificate ) {
        // Here all correct so submit...
    } else {
        // Something wrong so do not Submit...
    }
}