#!/usr/bin/env node
/*
* @Author: jasya
* @Date:   2014-12-21 21:34:44
* @Last Modified by:   jasya
* @Last Modified time: 2014-12-23 09:59:54
*/

'use strict';

var program = require('commander'),
paths       = require('path'),
fs          = require('fs'),
help_type   = require('../lib/help_type.js').types,
fileType    = require('file-type');


require('colorful').toxic();


function _parse(val){
    return val.split(',');
}

program
.version('0.0.2')
.usage('[options] <char ...>')
.option('-t, --type-set <items>', 'set file types', _parse)
.option('-c, --chars <items>', 'set search chars', _parse)
.option('-d, --ignore-dir <items>','ignore dir',_parse)
.on('--help',function(){
    console.log('The following is the list of filetypes supported:');
})
.parse(process.argv);

var files_type = undefined;

if(program.typeSet){
    files_type     = program.typeSet.map(function(value,index){
        return '.' + value;
    });
}

var chars          = program.args.length == 2 ? program.args[0] : program.args[1] || program.args[0];
var path           = program.args.length == 2 ? program.args[1] : program.args[0];

if(program.args.length == 1){
    path = process.cwd();
}

path = paths.resolve(path);

if(!chars) return;

var ext_dir   = ['.git','.svn','node_modules'];
ext_dir       = Array.prototype.concat.apply(ext_dir,program.ignoreDir);

function read(path){
    fs.stat(path,function(err, stats){
        if (err) {return err};
        for(var i in ext_dir){
            if(~path.indexOf(ext_dir[i])){
                return ;
            }
        }
        if(stats.isDirectory()){
            fs.readdir(path,function(err,files){
                if(err){return err}
                    files.forEach(function(value,index){
                        read(path+'/'+value);
                    });
            });
        }else if(stats.isFile()){
            if(files_type){
                if(!~files_type.indexOf(path.substring(path.lastIndexOf('.'),path.length))){
                    return;
                }
            }
                fs.readFile(path,function(err,data){
                    if(err){return err}
                        if(fileType(data)){
                            return false;
                        }
                        match(data.toString('utf8'),path);
                });
        }
    });
}

function match(str,path){
    var content = str.split(/\r\n|\n/ig);
    var lengs   = 1;
    var re      = new RegExp(chars,'ig');
    var _out = [];
    _out.push(path.toString().bold + '\n');
    for(var i in content){
        if(re.test(content[i])){
            _out.push(lengs.toString().grey)
            _out.push(content[i].replace(re,chars.cyan) + '\n');
        }
        lengs++;
    }
    if(_out.length > 1){
        console.log(_out.join(''));
    }
}

read(path);
console.log(' chars : %j'.bold, chars);
console.log(' path  : %j'.magenta, path);
