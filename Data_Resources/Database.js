const fs = require('fs');

fs.readFile('../Data_Resources/Database.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const content = "Github.com";

fs.writeFile('Database.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
});