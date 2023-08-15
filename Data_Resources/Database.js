function check_storage() {
    localStorage.setItem("Amount_MB", 0);
    localStorage.setItem("device_type", null);
    if ( Common_Method("BIOS") === null ) {
        var data = new Array();
        data.push(1, 2);
        data = JSON.stringify(data);
        localStorage.setItem("BIOS", data);
    }   if ( Common_Method("Money") === null ) {
        var data = new Array();
        data.push(1000, 500);
        data = JSON.stringify(data);
        localStorage.setItem("Money", data);
    }   if ( Common_Method("OS") === null ) {
        var data = new Array();
        data.push("Windows", "Mac");
        data = JSON.stringify(data);
        localStorage.setItem("OS", data);
    }   if ( Common_Method("Security_Code") === null ) {
        var data = new Array();
        data.push(123456, 921100);
        data = JSON.stringify(data);
        localStorage.setItem("Security_Code", data);
    }   if ( Common_Method("User_Lock") === null ) {
        var data = new Array();
        data.push(null, "My-Phone-V.2");
        data = JSON.stringify(data);
        localStorage.setItem("User_Lock", data);
    }   if ( Common_Method("Users") === null ) {
        var data = new Array();
        data.push("Owner", "Administrator");
        data = JSON.stringify(data);
        localStorage.setItem("Users", data);
    }   //Function Done with No Error...
}

function Common_Method(process) {
    process = localStorage.getItem( process );
    return process;
}