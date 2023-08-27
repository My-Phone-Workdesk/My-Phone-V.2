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
    var input_title = document.getElementById('input');
    localStorage.setItem("device_type", input_title.value);
    location.href = './Run.html';
}

function Scripting() {
    if ( localStorage.getItem("Code_Ext") == ".cmd" ) {
        // For CMD...
        var code_array = new Array();
        code_array = JSON.parse( localStorage.getItem("Code") );
        var field = "normal";
        var print = "nothing";
        document.write("<h1 style='text-align: center; text-decoration: underline; '> " + localStorage.getItem("device_type") + localStorage.getItem("Code_Ext") + " </h1>");
        document.write("<br>");
        document.write("<br>");
        document.write( "<h2> " + "-".repeat(45) + " Compilation and Errors " + "-".repeat(45) + " </h2>" );
        document.title = localStorage.getItem("device_type");
        document.write("<br>");
        for (var line = 0; line < code_array.length; line++) {
            field = check_Syntax_Array( code_array[line], line);
            document.write("<h3> " + field + " </h3>");
            if ( field.includes("Error") ) {
                console.error(field);
                return "Error in Code";
            } else {
                // All Good Compilation of that Line Done...!!!
            }
        }   //Here the Compilation Finishes...
        setTimeout( () => {
            document.write("<br>");
            document.write( "<h2> " + "-".repeat(45) + " Output " + "-".repeat(45) + " </h2>" );
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
                var yay = Syntax.slice(8, -4);
                if ( Identify_Type(yay) == 'String' ) {
                    // It is a String Value....
                } else {
                    var error = "This Syntax of Print() is only for String Value...";
                    return "Error in line : " + line + " : " + error;
                }
            } else if ( ( Syntax.slice(-3, -1) ) == '""' && ( Syntax.slice(5, 7) ) == '""') {
                // No Error in Printing Variables...
            } else if ( ( Syntax.slice(-2, -1) ) == '"' && ( Syntax.slice(5, 6) ) == '"') {
                var yay = Syntax.slice(6, -2);
                if ( Identify_Type(yay) == 'int' ) {
                    // It is a Integer Value...
                } else {
                    var error = "This Syntax of Print() is only for Integer Value...";
                    return "Error in line : " + line + " : " + error;
                }
            } else {
                var error = " Print() function must include atleast one character ')' in start and before last... "
                return "Error in line : " + line + " : " + error;
            }
        } else {
            var error = " Print() function should include character ';' at last... "
            return "Error in line : " + line + " : " + error;
        }
    }
    if ( Syntax.includes("get.") ) {
        if ( Syntax.slice(-1) == ";" && Syntax.slice(-2, -1) == ")" ) {
            if ( ! ( Syntax.toLowerCase().includes("user_lock of user (") || Syntax.toLowerCase().includes("user with user_lock (") || Syntax.toLowerCase().includes("user.id with user (") || Syntax.toLowerCase().includes("user.id with user_lock (") || Syntax.toLowerCase().includes("user_lock with id (") || Syntax.toLowerCase().includes("user with id (") || Syntax.toLowerCase().includes("user_device with id (") || Syntax.toLowerCase().includes("user_firmware with id (") || Syntax.toLowerCase().includes("user_firmware-version with id (") || Syntax.toLowerCase().includes("user_money with id (") ) ) {
                var error = " This Syntax of 'get' module is invalid... "
                return "Error in line : " + line + " : " + error;
            }
        } else {
            var error = " The Brackets '()' are not Closed Properly... "
            error += "or the executing ';' symbol is missing...";
            return "Error in line : " + line + " : " + error;
        }
    }
    return "Syntax of Line : " + line + " : Successfully Compiled...";
    
}

function Run_Code(statement) {

    if ( statement.includes("Print") ) {
        if ( statement.includes('"""') ) {
            document.writeln( "<h4> " + statement.slice(8, -4) + " </h4>" );
        } else if ( statement.includes('""') ) {
            var variable_data = statement.slice(7, -3);
            var variable_identity = JSON.parse( localStorage.getItem("Code_Var") );
            document.writeln( "<h4> " + variable_identity[variable_data] + " </h4>" );
        } else if ( statement.includes('"') ) {
            document.writeln( "<h4> " + statement.slice(6, -2) + " </h4>" );
        }
    } else if ( statement.includes("get.") ) {
        var input, process;
        if ( statement.toLowerCase().includes("user_lock of user (") ) {
            input = statement.slice(23, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("Users") );
            if ( process.indexOf(input) >= 0 ) {
                input = process.indexOf(input);
                process = JSON.parse( localStorage.getItem("User_Lock") );
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user with user_lock (") ) {
            input = statement.slice(25, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("User_Lock") );
            if ( process.indexOf(input) >= 0 ) {
                input = process.indexOf(input);
                process = JSON.parse( localStorage.getItem("Users") );
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User Lock is not Correct
            }
        } else if ( statement.toLowerCase().includes("user.id with user (") ) {
            input = statement.slice(23, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("Users") );
            if ( process.indexOf(input) >= 0 ) {
                process = process.indexOf(input);
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user.id with user_lock (") ) {
            input = statement.slice(28, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("User_Lock") );
            if ( process.indexOf(input) >= 0 ) {
                process = process.indexOf(input);
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user_lock with id (") ) {
            input = statement.slice(23, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("User_Lock") );
            if ( process.length > input ) {
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user with id (") ) {
            input = statement.slice(18, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("Users") );
            if ( process.length > input ) {
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user_device with id (") ) {
            // No Data available for Device...
        } else if ( statement.toLowerCase().includes("user_firmware with id (") ) {
            input = statement.slice(27, -2);
            if ( Type_Identification(input) == "Var" ) {
                process = JSON.parse( localStorage.getItem("Code_Var") );
                if ( process[input] != null ) {
                    input = process[input];
                } else {
                    // Variable is not Defined...
                    input = NaN;
                }
            }
            process = JSON.parse( localStorage.getItem("OS") );
            if ( process.length > input ) {
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);
            } else {
                // User is not Available
            }
        } else if ( statement.toLowerCase().includes("user_firmware-version with id (") ) {
            // No Data available for Firmware or OS Version...
        } else if ( statement.toLowerCase().includes("user_money with id (") ) {
            // No Data available for Money in case of Accounting...
        } else {
            // This Situation would never come... Gauranted by the Company & Owners...
        }
    }
    
}

function Identify_Type(variable) {
    var alphabets = new Array();
    alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (var sol = 0; sol < variable.length; sol++) {
        for (var sov = 0; sov < 26; sov++) {
            if ( variable[sol].toUpperCase() == alphabets[sov] ) {
                return "String";
            }
        }
    }
    return "int";
}

function Type_Identification(variable) {

    if ( variable.charAt(0) == "~" && variable.charAt(-1) == '~' ) {
        return "Var";
    } else {
        return "String";
    }

}