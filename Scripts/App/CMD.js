function Run() {
    document.write("Compiling your Code File Please Wait...");
    setTimeout( () => {
        document.open();
        document.write("Running Script...");
        setTimeout( () => {
            document.open();
            Scripting();
        }, 2000 );
    }, ( 1 + ( Math.round( Math.random() ) ) * 3000 )  );
}

function Compilation() {
    let code = document.getElementById("code");
    let code_text = code.value;
    var code_array = new Array();
    code_array = code_text.split("\n");
    localStorage.setItem( "Code", JSON.stringify(code_array) );
    location.href = './Run.html';
}

function Scripting() {
    var code_array = new Array();
    code_array = JSON.parse( localStorage.getItem("Code") );
    var field = "normal";
    for (var line = 0; line <= code_array.length; line++) {
        field = check_Syntax_Array( code_array[line], line);
        document.write(field);
        if ( field.includes("Error") ) {
            console.error(field);
            return "Error in Code";
        } else {
            document.write("<br>");
        }
    }
}

function check_Syntax_Array(Syntax, line) {
    
    if ( ! ( Syntax.charAt(Syntax.length - 1) != ";" || Syntax.charAt(Syntax.length - 1) != "{" ) ) {
        var error = " ';' or '{' expected at the end of the line... ";
        return "Error in line : " + line + " : " + error;
    } // Checking of the Symbol ';' at the end of the Line or Syntax...
    if ( Syntax.includes("Print") ) {
        if ( Syntax.charAt(Syntax.length - 1) == ";" ) {
            if ( ( Syntax.slice(-4, -1) ) == ")))" && ( Syntax.slice(5, 7) ) == "(((") {
                // No Error in Printing String...
            } else if ( ( Syntax.slice(-3, -1) ) == "))" && ( Syntax.slice(6, 7) ) == "))") {
                // No Error in Printing Variables...
            } else if ( ( Syntax.slice(-1) ) == ")" && ( Syntax.slice(7) ) == ")") {
                // No Error in Printing Integer Value...
            } else {
                var error = " Print() function must include atleast one character ')' in start and before last... "
                return "Error in line : " + line + " : " + error;
            }
        } else {
            var error = " Print() function should include character ';' at last... "
            return "Error in line : " + line + " : " + error;
        }
    }
    return "Syntax of Line : " + line + " : Successfully Compiled...";
}