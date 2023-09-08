// Exported Functions From Database ==>

const request = new XMLHttpRequest();
const Database = 'https://sheetdb.io/api/v1/qhlszwbu7dxp7';

function Database_UpdateData(sheet, argument, record) {
    var Database_URL = Database + argument + sheet;
    request.open("PUT", Database_URL);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.onload = () => {
        console.log(request.status);
        console.clear();
    }; request.send(record);
}

// Real Script Starts from Below ==>

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

function Payment_MB() {
    try {
        var a = new Array();
        a = JSON.parse(sessionStorage.getItem("Accounts_Data"));
        var Data_list = new Array();
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            Data_list.push( c["Security_Code"] );
        }
        a = Data_list;
        Data_list = null;
        var b = document.getElementById('input_code').value;
        var d = a.length;

        for (var c = 0; c < d; c = c ) {
                if (a[c] == b) {
                    if (c > 0) {
                        a = JSON.parse(sessionStorage.getItem("Accounts_Data") );
                        Data_list = new Array();
                        for (var ab = 0; ab < a.length; ab++) {
                            var ac = a[ab];
                            Data_list.push( ac["Money"] );
                        }
                        a = Data_list;
                        Data_list = null;
                        d = localStorage.getItem("Amount_MB");
                        d = parseFloat(d);
                        a[c] = parseFloat( a[c] );
                        if ( a[c] >= d ) {
                            a[c] -= d;
                            d = new Object();
                            d.Money = a[c];
                            d = JSON.stringify(d);
                            a = null;
                            
                            Database_UpdateData("?sheet=Accounts", '/ID/' + c, d);

                            document.body.style.cursor = "Progress";

                            setTimeout( () => {

                                var Account = new Object();
                                Account.Device = localStorage.getItem("device_type");
                                Account = JSON.stringify(Account);
                                localStorage.setItem("Add_User", Account);

                                var update = JSON.parse( sessionStorage.getItem("Accounts_Data") );
                                (update[c]).Money = ( JSON.parse(d) ).Money;
                                update = JSON.stringify( update );
                                sessionStorage.setItem("Accounts_Data", update);

                                alert("Payment Successful");
                                location.reload();
                                location.href = "../../OS_Package/OS_Setup/OS.html";

                                document.body.style.cursor = "Default";

                            },2000 ); return 1;
                            
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

            }; alert("Wrong Security Code"); location.reload(); return -1;

    } catch (error) {
        alert(error.message);
    }
}