const fs = require('fs');

/*
fs.readFile('../Data_Resources/Database.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

*/

const name = "Lala";

const content = "My Name is " + name;

for (var x = 0; x <= 10; x++) {
    fs.appendFile('Data_Resources/Database.txt', '\n' + content, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

/*

const request = window.indexedDB.open("Database.txt");

request.onerror( function () {
    //Error...
    console.error("I have many Errors within me...");
} );

request.onsuccess( function () {
    //Yes, I did it...
    console.warn("You are getting good in JS and its Database...");
} );

*/