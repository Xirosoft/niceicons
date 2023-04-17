const fs = require('fs');
const path = require('path');
const src = 'icons/src'
const dest = 'src/data/file-tree.json'

const directoryPath = path.join(__dirname, src);

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    const data = {};

    files.forEach(function (file) {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            const childFiles = fs.readdirSync(filePath);
            data[file] = childFiles.map(childFile => path.parse(childFile).name);
        }
    });

    const jsonData = JSON.stringify(data);

    fs.writeFile(dest, jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
});