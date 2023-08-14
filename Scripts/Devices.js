function show_hide() {
    let input = document.getElementById("input_code");
    let eye = document.getElementById("show/hide");
    var check = eye.className;
    if (check.includes("slash") == true) {
        eye.className = "fa-solid fa-eye";
        input.type = "password";
    } else {
        eye.className = "fa-solid fa-eye-slash";
        input.type = "text";
    }
}

function Setup() {
    var know = localStorage.getItem("device_type");
    switch (know) {
        case "Desktop":
            localStorage.setItem("Amount_MB", 4000);
            break;
        case "Laptop":
            localStorage.setItem("Amount_MB", 2000);
            break;
        case "Notepad":
            localStorage.setItem("Amount_MB", 1500);
            break;
        case "Foldable":
            localStorage.setItem("Amount_MB", 1000);
            break;
        case "Tablet":
            localStorage.setItem("Amount_MB", 800);
            break;
        case "Phone":
            localStorage.setItem("Amount_MB", 500);
            break;
        default:
            localStorage.setItem("device_type", "Administrative Device");
            localStorage.setItem("Amount_MB", 5000);
            break;
    }
    window.location.href = "../../Screen/User_Setup/Mother_Board.html";
}

function Mother_Board() {
    var does = localStorage.getItem("device_type");
    var did = localStorage.getItem("Amount_MB");
    document.querySelector('p').innerHTML = "Selected Device: " + does;
    document.querySelector('span').innerHTML = "Price of Mother Board: " + did;
}

function Payment_MB(int securityCode) {
    try {
        var a = new Array();
        a = JSON.parse(localStorage.getItem("Security_Code"));
        var b = securityCode;
        var d = a.length;
        setTimeout( function () {
            for (var c = 0; c <= d; c = c ) {
                if (a[c] == b) {
                    if (c > 0) {
                        a = JSON.parse(localStorage.getItem("Money") );
                        d = localStorage.getItem("Amount_MB");
                        if (a[c] >= d) {
                            a[c] -= d;
                            localStorage.removeItem("Money");
                            a = JSON.stringify(a);
                            localStorage.setItem("Money", a);
                            alert("Payment Successful");
                            location.reload();
                            location.href = "../../OS_Package/OS_Setup/OS.html";
                            return 1;
                        } else {
                            alert("Sorry, You can't Proceed ahead due to insufficient Account Balance");
                            location.reload();
                            return -2;
                        }
                    } else if (c == 0) {
                        alert("You can't use Government Financial Money...");
                        location.reload();
                        return 0;
                    }
                } else {
                    c++;
                }
            }
            alert("Wrong Security Code");
            location.reload();
            return -1;
        }, 500);
    } catch (error) {
        alert(error.message);
    }
}
