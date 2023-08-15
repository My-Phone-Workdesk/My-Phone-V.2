const fs = require('fs');

function AddData() {
    fs.appendFile('Data_Resources/Database.txt', '\n' + "Empty", err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}