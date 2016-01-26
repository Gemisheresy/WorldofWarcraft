var fs = require('fs');
var path = require('path');
var dirName = path.dirname(this) + '/models';
var files;
var Models= {};
var extRemove = function(fileName){
    return fileName.replace('.js','');
}

fs.readdir( dirName,function(err,files){
    files = files;
    for (file in files){
        Models[extRemove(files[file])] = require(dirName + '/' +files[file]);

    }
    exports.Models = Models;
});