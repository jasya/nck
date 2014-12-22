#!/usr/bin/env node
/* 
* @Author: jasya
* @Date:   2014-12-21 21:34:44
* @Last Modified by:   jasya
* @Last Modified time: 2014-12-22 14:43:34
*/

'use strict';

var program = require('commander'),
paths    = require('path'),
fs      = require('fs');

require('colorful').toxic();

function list(val) {
    return val.split(',');
}

function files_type(val){
    return val.split(',');
}


program
.version('0.0.1')
.usage('[options] <file ...>')
.option('-t, --type-set <items>', 'file types', files_type)
.option('-l, --list <items>', 'A list', list)
.parse(process.argv);

var files_type     = program.typeSet;
var chars          = program.list || program.args.length == 2 ? program.args[0] : program.args[1] || program.args[0];
var path           = program.args.length == 2 ? program.args[1] : program.args[0];

if(program.args.length == 1){
    path = process.cwd();
}

path = paths.resolve(path);

if(!chars) return;


var extension = ['.o','.jpg','.png','.idx','.pack','.node'];
var ext_dir   = ['.git','.svn','node_modules'];
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
            if(~extension.indexOf(path.substring(path.lastIndexOf('.'),path.length)) == 0){
                fs.readFile(path,function(err,data){
                    if(err){return err}
                        match(data.toString('utf8'),path);
                });
            }
        }
    });
}

function match(str,path){
    var content = str.split(/\r\n|\n/ig);
    var lengs   = 1;
    var re      = new RegExp(chars,'ig');
    if(re.test(str)){
        console.log('\n%s'.bold,path);
    }
    for(var i in content){
        if(re.test(content[i])){
            console.log(lengs.toString().grey + ':%s',content[i].replace(re,chars.cyan));
        }
        lengs++;
    }
}

read(path);
console.log(' chars: %j'.bold, chars);
console.log(' path: %j'.magenta, path);










