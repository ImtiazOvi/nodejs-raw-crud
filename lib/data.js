// dependencies
const fs = require('fs');
const path = require('path');

const lib = {};


// base directtory pf the data folder
lib.baseDir = path.join(__dirname, '/../data/');

// write data to file 
lib.create = function(dir, file, data, callback){
    // open file for writing 
    fs.open(lib.baseDir + dir + '/' + file + '.json', 'wx', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
            // convert data to string 
            const stringData = JSON.stringify(data);

            // write data to file & close it 
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error closing the new file')
                        }
                    });
                }else{
                    callback('There was an error, file may exits');
                }
            });
        }else{
            callback(err);
        };
    });
};

// read data from file
lib.read = (dir, file, callback) =>{
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, `utf8`, (err, data) => {
        callback(err, data);
    });
};

module.exports = lib;