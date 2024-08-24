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

    var body = document.body; var new_data = document.createElement( 'h2' );

    new_data.innerText = data; body.appendChild( new_data );

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
    sessionStorage.setItem( "SCE", JSON.stringify( { File_Extention: file_extention.value } ) );

    let code = document.querySelectorAll( 'code' ); var script = new Array();

    for ( var a = 0; a < code.length; a++ ) { script.push( code[ a ].innerText ); };

    var SCE = JSON.parse( sessionStorage.getItem( 'SCE' ) ); SCE[ 'Script' ] = script;

    var input_title = document.getElementById( 'input' ); SCE[ 'File_Name' ] = input_title.value;

    SCE[ 'File_variables' ] = new Array(); SCE[ 'Compiled_Code' ] = new Array();

    sessionStorage.setItem( 'SCE', JSON.stringify( SCE ) );

    return window.location.assign( './Run.html' );

};

function Scripting() {

    document.body.innerText = ''; const SCE = JSON.parse( sessionStorage.getItem( 'SCE' ) );
    
    const variables = SCE.File_variables;

    if ( SCE.File_Extention == ".cmd" ) {

        var code_array = new Array(); var field = "normal"; code_array = SCE.Script;

        var hr1 = document.createElement( 'hr' ); var h1 = document.createElement( 'h1' );
        h1.style.textAlign = 'center'; h1.style.textDecoration = 'underline'; h1.innerText = SCE.File_Name +
        SCE.File_Extention; var hr2 = document.createElement( 'hr' ); var br1 = document.createElement( 'br' );
        var br2 = document.createElement( 'br' ); var h2 = document.createElement( 'h2' );
        h2.innerText = "-".repeat( 46 ) + " Compilation and Errors " + "-".repeat( 46 );
        document.title = SCE.File_Name; var br3 = document.createElement( 'br' );

        document.body.appendChild( hr1 ); document.body.appendChild( h1 ); document.body.appendChild( hr2 );
        document.body.appendChild( br1 ); document.body.appendChild( br2 ); document.body.appendChild( h2 );
        document.body.appendChild( br3 );

        for ( var line = 0; line < code_array.length; line++ ) {

            field = check_Syntax_Array( code_array[ line ], line, SCE, variables );
            
            var h3 = document.createElement( 'h3' ); h3.innerText = field; document.body.appendChild( h3 );

            if ( field.toLowerCase().includes( "error" ) ) { console.error( field ); return "Error in Code"; };

        }; setTimeout( () => {

            var br4 = document.createElement( 'br' ); document.body.appendChild( br4 );
            var h2_1 = document.createElement( 'h2' ); document.body.appendChild( h2_1 );

            h2_1.innerText = "-".repeat( 57 ) + " Output " + "-".repeat( 57 );

            for ( var line = 0; line < SCE.Compiled_Code.length; line++ ) {
                
                const Output = Run_Code( SCE.Compiled_Code[ line ], line );

                if ( Output != true ) {

                    return print_data( Output.trim() );

                };
            
            };

        },1500 );

    };

};

function check_Syntax_Array( Syntax, line, SCE, variables ) {

    if ( Syntax.charAt( 0 ) == '#' ) {
        
        SCE.Compiled_Code.push( 'Comment' );

        return "Commentary Line..." + "Line == " + line;
    
    } else if ( [ ':', ';', '}' ].indexOf( Syntax.charAt( Syntax.length - 1 ) ) == -1 ) {
        
        return "Error in line : " + line + " : ';' or '{' or ':' expected at the end of the line... ";

    } else if ( Syntax.startsWith( 'print' ) ) {

        if ( Syntax.charAt( Syntax.length - 1 ) != ";" ) {

            return "Error in line : " + line + " : Print() function should include character ';' at last...";
        
        }; if ( ! ( Syntax.startsWith( '"""', 5 ) && Syntax.endsWith( '"""', Syntax.length - 1 ) ) ) {

            if ( ! ( Syntax.startsWith( '""', 5 ) && Syntax.endsWith( '""', Syntax.length - 1 ) ) ) {

                if ( ! ( Syntax.charAt( 5 ) == '"' && Syntax.charAt( Syntax.length - 2 ) == '"' ) ) {

                    return "Error in line : " + line + " : Print() function's Syntax is improper..." +
                    ' Go to "myphone-v.2-chrome://www.SCE_language_syntax.com" for more information about' +
                    ' the Print() function...';

                } else {

                    const content = Syntax.slice( 6, -2 ); if ( isNaN( content ) ) {

                        return "Error in line: " + line + " : Expected Number Data inside Print() function...";

                    } else { SCE.Compiled_Code.push( { do:'print', data: content } ); };

                };

            } else {

                const content = Syntax.slice( 7, -3 );

                const variable_index = variables.findIndex( item => item.name === content );

                if ( variable_index == -1 ) {

                    return "Error in line: " + line + " : Expected an Defined Variable inside Print() function...";

                } else { SCE.Compiled_Code.push( { do:'print', data: variables[ variable_index ] } ); };

            };

        } else {

            const content = Syntax.slice( 8, -4 );

            if ( ! ( typeof content === 'string' ) ) {

                return "Error in line: " + line + " : Expected String Data inside Print() function...";

            } else { SCE.Compiled_Code.push( { do:'print', data: content } ); };

        };

    } else if ( Syntax.startsWith( "get." ) ) {

        if ( Syntax.startsWith( "get." ) && Syntax.endsWith( ");" ) ) {

            let substring = Syntax.substring( 4, Syntax.length - 2 ).toLowerCase(); substring = substring.trim();

            const patterns = [
                
                'user_lock of user(', 'user with user_lock(', 'user.id with user(', 'user.id with user_lock(',
                'user_lock with id(', 'user with id(', 'user_device with id(', 'user_firmware with id(',
                'user_money with id(', 'user_firmware-version with id('
            
            ];

            const foundPattern = patterns.some( ( pattern ) => { return substring.startsWith( pattern ); });

            if ( foundPattern ) {

                var startParenthesis = substring.indexOf( '(' ) + 1;
                var withinParentheses = substring.substring( startParenthesis );
                withinParentheses = withinParentheses.trim();

                if ( patterns.indexOf( foundPattern ) >= 4 && patterns.indexOf( foundPattern ) <= 9 ) {

                    if (
                        
                        ( withinParentheses.startsWith('"') && withinParentheses.endsWith( '"' ) ) || 
                        ( withinParentheses.startsWith("'") && withinParentheses.endsWith( "'" ) )
                        
                    ) {
                        
                        return "Error in line : " + line + " : Expected a int input or variable with int data...";
                    
                    } else if ( typeof withinParentheses === 'string' ) {

                        const variable_index = variables.findIndex( item => item.name === withinParentheses );

                        if ( variable_index == -1 ) {

                            return "Error in line: " + line + " : Expected an Defined Variable inside" +
                            "Get() function...";

                        } else if ( isNaN( variables[ variable_index ] ) ) {

                            return "Error in line : " + line + " : Expected a int data inside the variable...";

                        } else {
                            
                            SCE.Compiled_Code.push({
                                
                                do:'get', data: variables[ variable_index ], get: patterns.indexOf( foundPattern )
                            
                            });
                        
                        };

                    } else {
                        
                        SCE.Compiled_Code.push({
                        
                            do:'get', data: withinParentheses, get: patterns.indexOf( foundPattern )
                    
                        });
                    
                    };

                } else {
                    
                    if (
                        
                        ( withinParentheses.startsWith( '"' ) && withinParentheses.endsWith( '"' ) ) ||
                        ( withinParentheses.startsWith( "'" ) && withinParentheses.endsWith( "'" ) )
                        
                    ) {

                        withinParentheses = withinParentheses.replace( /['"]/g, '' );

                        SCE.Compiled_Code.push({
                            
                            do:'get', data: withinParentheses, get: patterns.indexOf( foundPattern )
                        
                        });

                    } else if ( isNaN( withinParentheses ) && typeof withinParentheses === 'string' ) {

                        const variable_index = variables.findIndex( item => item.name === withinParentheses );

                        if ( variable_index == -1 ) {

                            return "Error in line: " + line + " : Expected an Defined Variable inside" +
                            "Get() function...";

                        } else if ( typeof variables[ variable_index ] !== 'string' ) {

                            return "Error in line : " + line + " : Expected a String data inside the variable...";

                        } else {
                            
                            SCE.Compiled_Code.push({
                                
                                do:'get', data: variables[ variable_index ], get: patterns.indexOf( foundPattern )
                            
                            });
                        
                        };

                    } else {

                        return "Error in line : " + line + " : Expected String input or variable with String data...";

                    };

                };

            } else {

                return "Error in line: " + line + ' : This Syntax of "get" module is invalid... ' +
                'try resolving it by checking the Get() function in your script or Go to "myphone-v.2' +
                '-chrome://www.SCE_language_syntax.com" for more information about the Get() function...';

            };

        } else {

            return "Error in line : " + line + " : Get() function's Syntax is improper... Go to" +
            ' "myphone-v.2-chrome://www.SCE_language_syntax.com" for more information about the Get() function...';

        };

    } else if ( Syntax.startsWith( "say_" ) ) {

        if ( Syntax.endsWith( "_;" ) ) {

            var content = Syntax.substring( 4, Syntax.length - 2 ); if (
                
                ( content.startsWith( '"' ) && content.endsWith( '"' ) ) ||
                ( content.startsWith( "'" ) && content.endsWith( "'" ) )
                
            ) {

                content = content.replace( /['"]/g, '' );

                SCE.Compiled_Code.push( { do:'say', data: content } );

            } else if ( isNaN( content ) && typeof content === 'string' ) {

                const variable_index = variables.findIndex( item => item.name === content );

                if ( variable_index == -1 ) {

                    return "Error in line: " + line + " : Expected an Defined Variable inside Say() function...";

                } else if ( typeof variables[ variable_index ] !== 'string' ) {

                    return "Error in line : " + line + " : Expected a String data inside the variable...";

                } else {

                    SCE.Compiled_Code.push( { do:'say', data: variables[ variable_index ] } );

                };

            } else { SCE.Compiled_Code.push( { do:'say', data: content } ); };

        } else if ( Syntax.endsWith( ");" ) ) {

            const regex = /^say_(.+)_\(\s*(.+)\s*\);$/;
            const match = Syntax.match( regex );

            if ( match ) {

                var statement = match[ 1 ]; const time = match[ 2 ]; if (
                
                    ( statement.startsWith( '"' ) && statement.endsWith( '"' ) ) ||
                    ( statement.startsWith( "'" ) && statement.endsWith( "'" ) )
                    
                ) {
    
                    statement = statement.replace( /['"]/g, '' );
                    
                    const value = Check_Time( statement, time );
                    
                    if ( value != true ) { return value; };
    
                } else if ( typeof statement === 'string' ) {
    
                    const variable_index = variables.findIndex( item => item.name === statement );

                    if ( variable_index == -1 ) {

                        return "Error in line: " + line + " : Expected an Defined Variable inside Say() function...";

                    } else if ( typeof variables[ variable_index ] !== 'string' ) {

                        return "Error in line : " + line + " : Expected a String data inside the variable...";

                    } else {
                        
                        const value = Check_Time( variables[ variable_index ], time );

                        if ( value != true ) { return value; };
                    
                    };
    
                } else {
                    
                    const value = Check_Time( statement, time );

                    if ( value != true ) { return value; };
                
                };

            } else {

                return "Error in line : " + line + " : Missing Time parameter starting format i.e.. '_('...";
                
            };

            function Check_Time( statement, time ) {

                if (
                
                    ( ( time.startsWith( '"' ) && time.endsWith( '"' ) ) ||
                    ( time.startsWith( "'" ) && time.endsWith( "'" ) ) ) ||
                    ( isNaN( time ) && typeof time !== 'number' )
                    
                ) {
    
                    return "Error in line : " + line + " : Expected a int input or variable with int data in the" +
                    " Time parameter...";
    
                } else if ( typeof time === 'string' ) {
    
                    const variable_index = variables.findIndex( item => item.name === time );

                    if ( variable_index == -1 ) {

                        return "Error in line: " + line + " : Expected an Defined Variable inside Say() function...";

                    } else if ( isNaN( variables[ variable_index ] ) ) {

                        return "Error in line : " + line + " : Expected a Int data inside the variable...";

                    } else {
                        
                        SCE.Compiled_Code.push({
                            
                            do: 'say', data: statement, time: variables[ variable_index ]
                        
                        }); return true;
                    
                    };
    
                } else {

                    SCE.Compiled_Code.push( { do: 'say', data: statement, time: time } ); return true;

                };

            };

        } else {

            return "Error in line : " + line + " : Say() function's Syntax is improper... Go to" +
            ' "myphone-v.2-chrome://www.SCE_language_syntax.com" for more information about the Say() function...';

        };

    } else if ( Syntax.startsWith( "speak_" ) ) {

        //

    }; return "Syntax of Line : " + line + " : Successfully Compiled...";
    
};

function Run_Code( Compiled_line, line ) {

    const SCE = JSON.parse( sessionStorage.getItem( 'SCE' ) ); const variables = SCE.File_variables;

    if ( Compiled_line.do == 'print' ) { print_data( Compiled_line.data ); }
    else if ( Compiled_line.do == 'get' ) {

        const Data = JSON.parse( sessionStorage.getItem( 'Data' ) );

        const application = [
            
            { given: 'User', give: 'User_Lock' }, { given: 'User_Lock', give: 'User' }, { given: 'User', give: 'id' },
            { given: 'User_Lock', give: 'id' }, { given: 'id', give: 'User_Lock' }, { given: 'id', give: 'User' },
            { given: 'id', give: 'Device' }, { given: 'id', give: 'Firmware' },
            { given: 'id', give: 'Firmware_Version' }, { given: 'id', give: 'Account' }
        
        ];

        const on_error = [
            
            'The Specified User not Found on the Server...', 'No User Found with such User Lock on the Server...',
            'No User Found with the give Username on the Server...',
            'No User found who has such User Lock, on the Server...',
            'No User Found with that id on the Server or the User has some details missing that is illigal...'
        
        ];

        if ( application[ Compiled_line.get ].given == 'id' ) {};

        const match = Data.findIndex( ( item ) => {

            return item[ application[ Compiled_line.get ].given ] === Compiled_line.data;

        });

        if ( match != -1 ) {
            
            variables.get = Data[ match ][ application[ Compiled_line.get ].give ];

        } else {

            var error_message; if ( Compiled_line.get <= 4 ) {
                
                error_message = on_error[ Compiled_line.get ];
            
            } else { error_message = on_error[ 4 ]; };

            return 'Error in Code Line : ' + line + ' : ' + error_message;

        };

    }; return true;
    
};