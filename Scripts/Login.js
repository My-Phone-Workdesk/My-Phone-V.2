const fs = require('fs');

function Start_Up() {
    var BIOS_List = new Array();
    BIOS_List = JSON.parse( localStorage.getItem("BIOS") );
    var BIOS = localStorage.getItem("Amount_MB");
    BIOS = BIOS_List[BIOS];
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function () {
        document.body.style.backgroundColor = "#ffffff";
        var read = fs.readFileSync('../Data_Resources/Database.json');
        console.log(read);
    }, BIOS * 1000);
}