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

localStorage.setItem("device_type", null);
localStorage.setItem("Amount_MB", 0);

function Setup() {
    var know = localStorage.getItem("device_type");
    switch (know) {
        case "Desktop":
            localStorage.setItem("Amount_MB", 4000);
            console.log("A good News"); 
            setTimeout (8000);
            break;
        case "Laptop" :
            localStorage.setItem("Amount_MB", 2000);
            break;
        case "Notepad" :
            localStorage.setItem("Amount_MB", 1500);
            break;
        case "Foldable" :
            localStorage.setItem("Amount_MB", 1000);
            break;
        case "Tablet" :
            localStorage.setItem("Amount_MB", 800);
            break;
        case "Phone" :
            localStorage.setItem("Amount_MB", 500);
            break;
        default :
            localStorage.setItem("device_type", "Administrative Device");
            localStorage.setItem("Amount_MB", 5000);
            break;
    }
    window.location.href = "../../Screen/User_Setup/Mother_Board.html";
    console.log("A bad News");
}

function Mother_Board() {
    var does = localStorage.getItem("device_type");
    var did = localStorage.getItem("Amount_MB");
    document.querySelector('p').innerHTML = "Your Selected Device is : " + does;
    document.querySelector('span').innerHTML = "Your Mother Board Price Bill is : " + did;
}
