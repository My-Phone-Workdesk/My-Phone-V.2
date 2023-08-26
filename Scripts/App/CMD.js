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
    let file_extention = document.getElementById("File-Extention");
    localStorage.setItem("Code_Ext", file_extention.value);
    let code = document.getElementById("code");
    let code_text = code.value;
    var code_array = new Array();
    code_array = code_text.split("\n");
    localStorage.setItem( "Code", JSON.stringify(code_array) );
    location.href = './Run.html';
}

function Scripting() {
    if ( localStorage.getItem("Code_Ext") == ".cmd" ) {
        // For CMD...
        var code_array = new Array();
        code_array = JSON.parse( localStorage.getItem("Code") );
        var field = "normal";
        var print = "nothing";
        for (var line = 0; line < code_array.length; line++) {
            field = check_Syntax_Array( code_array[line], line);
            document.write(field);
            if ( field.includes("Error") ) {
                console.error(field);
                return "Error in Code";
            } else {
                document.write("<br>");
            }
        }   //Here the Compilation Finishes...
        setTimeout( () => {
            document.write("<br>");
            document.write( "-".repeat(45) + " Output " + "-".repeat(45) );
            document.write("<br>");
            for (var line = 0; line < code_array.length; line++) {
                Run_Code( code_array[line] );
            }
        },2000 );

    }
}

function check_Syntax_Array(Syntax, line) {

    if ( Syntax.charAt(0) == '#' ) {
        //Its a Comment just compile or ignore it...
        return "Commentary Line..." + "Line == " + line;
    }
    if ( ! ( Syntax.charAt(Syntax.length - 1) != ";" || Syntax.charAt(Syntax.length - 1) != "{" ) ) {
        var error = " ';' or '{' expected at the end of the line... ";
        return "Error in line : " + line + " : " + error;
    } // Checking of the Symbol ';' at the end of the Line or Syntax...
    if ( Syntax.includes("Print") ) {
        if ( Syntax.charAt(Syntax.length - 1) == ";" ) {
            if ( ( Syntax.slice(-4, -1) ) == '"""' && ( Syntax.slice(5, 8) ) == '"""') {
                // No Error in Printing String...
            } else if ( ( Syntax.slice(-3, -1) ) == '""' && ( Syntax.slice(5, 7) ) == '""') {
                // No Error in Printing Variables...
            } else if ( ( Syntax.slice(-2, -1) ) == '"' && ( Syntax.slice(5, 6) ) == '"') {
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

function Run_Code(statement) {

    if ( statement.includes("Print") ) {
        if ( statement.includes('"""') ) {
            document.writeln( statement.slice(8, -4) );
        } else if ( statement.includes('""') ) {
            //variable Value...
        } else if ( statement.includes('"') ) {
            document.writeln( statement.slice(6, -2) );
        }
    }
    
}