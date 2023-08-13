function Start_Up() {
    var BIOS_List = new Array();
    BIOS_List = JSON.parse( localStorage.getItem("BIOS") );
    var BIOS = localStorage.getItem("Amount_MB");
    BIOS = BIOS_List[BIOS];
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function () {
        document.body.style.backgroundColor = "#ffffff";
        BIOS_List = JSON.parse( localStorage.getItem("OS") );
        BIOS = localStorage.getItem("Amount_MB");
        var OS = BIOS_List[BIOS];
        switch (OS) {
            case "Windows":
                document.body.style.backgroundImage = "../OS_Package/Windows.jpg";
                break;
            case "Mac":
                document.body.style.backgroundImage = "../OS_Package/Mac.jpg";
                break;
            case "Linux":
                document.body.style.backgroundImage = "../OS_Package/Linux.jpg";
                break;
            case "IOS":
                document.body.style.backgroundImage = "../OS_Package/IOS.jpg";
                break;
            case "Android":
                document.body.style.backgroundImage = "../OS_Package/Android.jpg";
                break;
            case "Andos":
                document.body.style.backgroundImage = "../OS_Package/Andos.jpg";
                break;
            default:
                document.body.style.backgroundImage = "../OS_Package/Android.jpg";
                break;
        }
        document.body.style.backgroundSize = "Cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }, BIOS * 1000);
}