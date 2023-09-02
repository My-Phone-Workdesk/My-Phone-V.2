function Start_Up() {
    var BIOS_List = new Array();
    BIOS_List = JSON.parse( sessionStorage.getItem("Data") );
    var Data_List = new Array();
    for (var a = 0; a < BIOS_List.length; a++) {
        var b = BIOS_List[a];
        Data_List.push( b["BIOS"] );
    }
    BIOS_List = Data_List;
    Data_List = null;
    var BIOS = localStorage.getItem("Amount_MB");
    BIOS = BIOS_List[BIOS];
    document.body.style.backgroundColor = "#ffffff";
    setTimeout ( function () {
        BIOS_List = JSON.parse( sessionStorage.getItem("Data") );
        Data_List = new Array();
        for (var a = 0; a < BIOS_List.length; a++) {
            var b = BIOS_List[a];
            Data_List.push( b["Firmware"] );
        }
        BIOS_List = Data_List;
        Data_List = null;
        window.BIOS = localStorage.getItem("Amount_MB");
        var OS = BIOS_List[BIOS - 1];
        document.body.style.backgroundSize = "60vw 55vh";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        switch (OS) {
            case "Windows":
                document.body.style.backgroundImage = "url('../OS_Package/Windows.jpg')";
                document.body.style.backgroundPosition = "top center";
                break;
            case "Mac":
                document.body.style.backgroundImage = "url('../OS_Package/Mac.jpg')";
                break;
            case "Linux":
                document.body.style.backgroundImage = "url('../OS_Package/Linux.jpg')";
                break;
            case "IOS":
                document.body.style.backgroundImage = "url('../OS_Package/IOS.jpg')";
                break;
            case "Android":
                document.body.style.backgroundImage = "url('../OS_Package/Android.jpg')";
                break;
            case "Andos":
                document.body.style.backgroundImage = "url('../OS_Package/Andos.jpg')";
                break;
            default:
                document.body.style.backgroundImage = "url('../OS_Package/Linux.jpg')";
                break;
        }
        setTimeout( function () {
            document.body.style.backgroundImage = "";
        }, BIOS * 2000 );
        setTimeout ( function () {
            location.href = "./Home_Screen.html";
        } , BIOS * 3000 );
    }, BIOS * 1000);
}