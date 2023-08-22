function Activate() {
    let code = document.getElementById("code");
    code.addEventListener('keyup', function (event) {
        setTimeout(() => {
            switch ( event.key ) {
                case "{":
                    code.value += "};";
                    break;
                case "(":
                    code.value += ")";
                    break;
                case "f":
                    var report = confirm("Do you want to add 'function' to script...");
                    if (report) {
                        code.value += "unction ";
                    }
                    break;
                case "enter":
                    code.value += "\n   ";
                    break;
                case "l":
                    var report = confirm("Do you want to add 'Lala' to script...");
                    if (report) {
                        code.value += "ala";
                    }
                    break;
                default:
                    if ( event.keyCode == 13 ) {
                        var str = "";
                        for ( var remove = 0; ! ( remove == code.value.length - 2 ); remove++ ) {
                            str += code.value[remove];
                        }
                        code.value = str;
                        code.value +="  " + "\n" + "};";
                    }
            }
        }, 50);
    });
}

function Run() {
    document.write("Compiling your Code File Please Wait...");
    setTimeout( () => {
        document.open();
        document.write("Running Script...");
        setTimeout( () => {
            document.open();
            Compilation();
        }, 2000 );
    }, ( 1 + ( Math.round( Math.random() ) ) * 3000 )  );
}

function Compilation() {
    
}