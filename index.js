var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');


fs.readdir('.', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            if (err) throw err;
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});