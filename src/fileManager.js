var fs = require("fs");

module.exports = {
    read: readFile,
    write: writeFile
};

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./history.json', 'utf8', (error, fileContent) => {
            if (error != null) {
                reject(error);
                return;
            }
            resolve(fileContent);
        });
    });
}

function writeFile(fileContent) {
    console.log(fileContent)
    return new Promise((resolve, reject) => {
        fs.writeFile('./history.json', fileContent, writeFileError => {
            if (writeFileError) {
                reject(writeFileError);
                return;
            }
            resolve('./history.json');
        });
    });
}