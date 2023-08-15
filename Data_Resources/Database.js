let data = localStorage.getItem("Amount_MB");

function check_storage() {
    if ( Common_Method("BIOS") === null ) {
        force(1, 2);
        localStorage.setItem("BIOS", data);
    }   if ( Common_Method("Money") === null ) {
        force(1000, 500);
        localStorage.setItem("Money", data);
    }   if ( Common_Method("OS") === null ) {
        force("Windows", "Android");
        localStorage.setItem("OS", data);
    }   if ( Common_Method("Security_Code") ) {
        force(123456, 921100);
        localStorage.setItem("Security_Code", data);
    }   if ( Common_Method("User_Lock") === null ) {
        force(null, "My-Phone-V.2");
        localStorage.setItem("User_Lock", data);
    }   if ( Common_Method("Users") === null ) {
        force("Owner", "Public");
        localStorage.setItem("Users", data);
    }   //Function Done with No Error...
}

function String_Convertion(input) {
    input = new Array();
    input = JSON.stringify(input);
    return input;
}

function Open_String(output) {
    output = new Array();
    output = JSON.parse( localStorage.getItem(output) );
    return output;
}

function Common_Method(process) {
    process = localStorage.getItem( process );
    return process;
}

function force(one, two) {
    var list = new Array();
    list.push(one, two);
    String_Convertion(list);
    localStorage.setItem("Amount_MB", list);
}