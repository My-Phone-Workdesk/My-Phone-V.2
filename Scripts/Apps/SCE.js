// Imported Functions From Database and Other Services ==>

import { Run_Function } from 'https://lalacoder.github.io/Modules/Module_for_JS.js';

// Real Script Starts from Below ==>

window.onload = () => {

    if ( location.pathname.includes( 'SCE.html' ) ) {

        let Compile = document.getElementById( 'Compile' );
        Compile.addEventListener( 'click', Compilation );

        document.getElementById( "save-button" ).addEventListener( "click", () => {
            
            document.getElementById("popup").style.display = "flex";
            document.body.style.overflow = "hidden";
        
        });

        document.getElementById( "test-code-button" ).addEventListener( "click", () => {
            
            document.getElementById("popup").style.display = "flex";
            document.body.style.overflow = "hidden";
        
        });
    
        document.getElementById( "close-popup" ).addEventListener( "click", () => {
            
            document.getElementById("popup").style.display = "none";
            document.body.style.overflow = "auto";
        
        });
    
        document.getElementById( "Save" ).addEventListener( "click", () => {
            
            document.getElementById("popup").style.display = "none";
            document.body.style.overflow = "auto";
        
        });

    } else if ( location.pathname.includes( 'Run.html' ) ) { Run(); };

};

function print_data( data ) {

    var body = document.body;

    var new_data = document.createElement( 'h2' );

    new_data.innerText = data;
    
    body.appendChild( new_data );

};

function Run() {

    print_data( "Compiling your Code File Please Wait..." );

    setTimeout( () => {

        document.body.innerText = '';

        print_data( "Running Script..." );

        setTimeout( Scripting,2000 );

    }, ( 1 + ( Math.round( Math.random() ) ) * 3000 )  );

};

function Compilation() {

    let file_extention = document.getElementById( "File-Extention" );
    localStorage.setItem( "Code_Ext", file_extention.value );

    let code = document.querySelectorAll( 'code' ); var script = new Array();

    for ( var a = 0; a < code.length; a++ ) { script.push( code[ a ].innerText ); };

    localStorage.setItem( "Code", JSON.stringify( script ) );

    var input_title = document.getElementById( 'input' );
    localStorage.setItem( "device_type", input_title.value );

    return window.location.assign( './Run.html' );

};

function Scripting() {

    if ( localStorage.getItem( "Code_Ext" ) == ".cmd" ) {

        var code_array = new Array(); var field = "normal";

        code_array = JSON.parse( localStorage.getItem( "Code" ) );

        var hr1 = document.createElement( 'hr' ); var h1 = document.createElement( 'h1' );
        h1.style.textAlign = 'center'; h1.style.textDecoration = 'underline';
        h1.innerText = localStorage.getItem( "device_type" ) + localStorage.getItem( "Code_Ext" );
        var hr2 = document.createElement( 'hr' ); var br1 = document.createElement( 'br' );
        var br2 = document.createElement( 'br' ); var h2 = document.createElement( 'h2' );
        h2.innerText = "-".repeat( 46 ) + " Compilation and Errors " + "-".repeat( 46 );
        document.title = localStorage.getItem( "device_type" ); var br3 = document.createElement( 'br' );

        document.body.appendChild( hr1 ); document.body.appendChild( h1 ); document.body.appendChild( hr2 );
        document.body.appendChild( br1 ); document.body.appendChild( br2 ); document.body.appendChild( h2 );
        document.body.appendChild( br3 );

        for ( var line = 0; line < code_array.length; line++ ) {

            field = check_Syntax_Array( code_array[ line ], line );
            
            var h3 = document.createElement( 'h3' ); h3.innerText = field; document.body.appendChild( h3 );

            if ( field.toLowerCase().includes( "error" ) ) { console.error( field ); return "Error in Code"; };

        }; setTimeout( () => {

            var br4 = document.createElement( 'br' ); document.body.appendChild( br4 );
            var h2_1 = document.createElement( 'h2' ); document.body.appendChild( h2_1 );

            h2_1.innerText = "-".repeat( 57 ) + " Output " + "-".repeat( 57 );

            for ( var line = 0; line < code_array.length; line++ ) { Run_Code( code_array[ line ] ); };

        },2000 );

    };

};

function check_Syntax_Array( Syntax, line ) {

    if ( Syntax.charAt(0) == '#' ) {

        //Its a Comment just compile or ignore it...
        return "Commentary Line..." + "Line == " + line;

    }; if ( ! ( Syntax.charAt(Syntax.length - 1) != ";" || Syntax.charAt(Syntax.length - 1) != "{" ) ) {

        var error = " ';' or '{' expected at the end of the line... ";
        return "Error in line : " + line + " : " + error;

    }; // Checking of the Symbol ';' at the end of the Line or Syntax...

    if ( Syntax.includes("Print") ) {

        if ( Syntax.charAt(Syntax.length - 1) == ";" ) {

            if ( ( Syntax.slice(-4, -1) ) == '"""' && ( Syntax.slice(5, 8) ) == '"""') {

                var yay = Syntax.slice(8, -4);

            if ( Run_Function.type.Identify( yay ) == 'String' ) { /* It is a String Value.... */ }

            else {

                var error = "This Syntax of Print() is only for String Value...";
                return "Error in line : " + line + " : " + error;

            };

            } else if ( ( Syntax.slice(-3, -1) ) == '""' && ( Syntax.slice(5, 7) ) == '""') {

                // No Error in Printing Variables...

            } else if ( ( Syntax.slice(-2, -1) ) == '"' && ( Syntax.slice(5, 6) ) == '"') {

                var yay = Syntax.slice(6, -2);

                if ( Run_Function.type.Identify( yay ) == 'int' ) { /* It is a Integer Value... */ }

                else {

                    var error = "This Syntax of Print() is only for Integer Value...";
                    return "Error in line : " + line + " : " + error;

                };

            } else {

                var error = " Print() function must include atleast one character ')' in start and" +
                "before last... "

                return "Error in line : " + line + " : " + error;

            };

        } else {

            var error = " Print() function should include character ';' at last... ";

            return "Error in line : " + line + " : " + error;

        };

    }; if ( Syntax.includes("get.") ) {

        if ( Syntax.slice(-1) == ";" && Syntax.slice(-2, -1) == ")" ) {

            if ( ! ( Syntax.toLowerCase().includes("user_lock of user (") || Syntax.toLowerCase().includes("user with user_lock (") || Syntax.toLowerCase().includes("user.id with user (") || Syntax.toLowerCase().includes("user.id with user_lock (") || Syntax.toLowerCase().includes("user_lock with id (") || Syntax.toLowerCase().includes("user with id (") || Syntax.toLowerCase().includes("user_device with id (") || Syntax.toLowerCase().includes("user_firmware with id (") || Syntax.toLowerCase().includes("user_firmware-version with id (") || Syntax.toLowerCase().includes("user_money with id (") ) ) {

                var error = " This Syntax of 'get' module is invalid... ";

                return "Error in line : " + line + " : " + error;

            };

        } else {

            var error = " The Brackets '()' are not Closed Properly... ";
            error += "or the executing ';' symbol is missing...";
            return "Error in line : " + line + " : " + error;

        };

    }; return "Syntax of Line : " + line + " : Successfully Compiled...";
    
};

function Run_Code( statement ) {

    if ( statement.includes("Print") ) {

        if ( statement.includes('"""') ) {

            document.writeln( "<h4> " + statement.slice(8, -4) + " </h4>" );

        } else if ( statement.includes('""') ) {

            var variable_data = statement.slice(7, -3);
            var variable_identity = JSON.parse( localStorage.getItem("Code_Var") );

            document.writeln( "<h4> " + variable_identity[variable_data] + " </h4>" );

        } else if ( statement.includes('"') ) {

            document.writeln( "<h4> " + statement.slice(6, -2) + " </h4>" );

        };

    } else if ( statement.includes("get.") ) {

        var input, process;

        if ( statement.toLowerCase().includes("user_lock of user (") ) {

            input = statement.slice(23, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("Users") );

            if ( process.indexOf(input) >= 0 ) {

                input = process.indexOf(input);
                process = JSON.parse( localStorage.getItem("User_Lock") );
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user with user_lock (") ) {

            input = statement.slice(25, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("User_Lock") );

            if ( process.indexOf(input) >= 0 ) {

                input = process.indexOf(input);
                process = JSON.parse( localStorage.getItem("Users") );
                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User Lock is not Correct */ };

        } else if ( statement.toLowerCase().includes("user.id with user (") ) {

            input = statement.slice(23, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("Users") );

            if ( process.indexOf(input) >= 0 ) {

                process = process.indexOf(input);
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user.id with user_lock (") ) {

            input = statement.slice(28, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("User_Lock") );

            if ( process.indexOf(input) >= 0 ) {

                process = process.indexOf(input);
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user_lock with id (") ) {

            input = statement.slice(23, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("User_Lock") );

            if ( process.length > input ) {

                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user with id (") ) {

            input = statement.slice(18, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) {
                    input = process[input];
                } else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("Users") );

            if ( process.length > input ) {

                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user_device with id (") ) {

            // No Data available for Device...

        } else if ( statement.toLowerCase().includes("user_firmware with id (") ) {

            input = statement.slice(27, -2);

            if ( Type_Identification(input) == "Var" ) {

                process = JSON.parse( localStorage.getItem("Code_Var") );

                if ( process[input] != null ) { input = process[input]; }
                else { /* Variable is not Defined... */ input = NaN; };

            }; process = JSON.parse( localStorage.getItem("OS") );

            if ( process.length > input ) {

                process = process[input];
                input = JSON.parse(localStorage.getItem("Code_Var"));
                input.get = process;
                input = JSON.stringify(input);
                localStorage.setItem("Code_Var", input);

            } else { /* User is not Available */ };

        } else if ( statement.toLowerCase().includes("user_firmware-version with id (") ) {

            // No Data available for Firmware or OS Version...

        } else if ( statement.toLowerCase().includes("user_money with id (") ) {

            // No Data available for Money in case of Accounting...

        } else { /* This Situation would never come... Gauranted by the Company & Owners... */ };

    };
    
};

function Type_Identification( variable ) {

    if ( variable.charAt( 0 ) == "~" && variable.charAt( -1 ) == '~' ) { return "Var"; } else { return "String"; };

};

/* An Extract from ChatGPT by giving it some kinds of instructions...

function evaluateCondition(condition) {
    
    try { return eval(condition); } catch (e) { console.error('Invalid condition:', condition); return false; }

}

function runUserCode(code) {
    const output = document.getElementById('output');

    function executeCommands(commands, condition) {
        let shouldContinue = typeof condition === 'number' ? condition > 0 : evaluateCondition(condition);
        while (shouldContinue) {
            for (let j = 0; j < commands.length; j++) {
                if (typeof commands[j] === 'string') {
                    if (commands[j].startsWith('for ')) {
                        const conditionOrCount = commands[j].slice(4, -1).trim();
                        const isNumber = !isNaN(conditionOrCount);
                        const loopCondition = isNumber ? parseInt(conditionOrCount) : conditionOrCount;
                        const innerCommands = [];
                        j++;
                        while (commands[j] !== ':' && j < commands.length) {
                            innerCommands.push(commands[j]);
                            j++;
                        }
                        if (commands[j] === ':') {
                            executeCommands(innerCommands, loopCondition);
                        }
                    } else if (commands[j].startsWith('print"""') && commands[j].endsWith('"""')) {
                        const strToPrint = commands[j].slice(7, -3);
                        if (typeof strToPrint === 'string') {
                            output.innerHTML += strToPrint + '<br>';
                        } else {
                            console.error('Error: Invalid content to print. Must be a string.');
                        }
                    } else if (commands[j].startsWith('print"""') && !commands[j].endsWith('"""')) {
                        console.error('Error: Invalid print statement. Expected """ at the end.');
                    } else if (commands[j].startsWith('print"""') && !commands[j].startsWith('print"""')) {
                        console.error('Error: Invalid print statement. Expected """ at the start.');
                    } else if (commands[j] !== ':') {
                        // Any other string handling if needed
                    }
                } else if (typeof commands[j] === 'function') {
                    commands[j]();
                }
            }
            if (typeof condition === 'number') {
                condition--;
            } else {
                shouldContinue = evaluateCondition(condition);
            }
        }
    }

    executeCommands(code, 1);
}

// Example usage:

// Define an array of instructions and functions (user's code)
let count = 3;  // Example variable to use in conditions
const userCode = [
    "print\"\"\"String 1\"\"\"",
    function() { console.log('Function 1 executed'); },
    'print"""123""";',
    'print"int";',
    function() { console.log('Function 2 executed'); count--; },
    'print"""abc""";',
    function() { console.log('Function 3 executed'); },
    'print"456";',
    ":",
    function() { console.log('Function 4 executed'); },
];

// Run the user's code
document.addEventListener('DOMContentLoaded', () => {
    runUserCode(userCode);
});

*/