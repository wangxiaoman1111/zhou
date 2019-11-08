#! /usr/bin/env node
const path = require('path');

const fs = require('fs');
console.log("我是第二个")
let oldName =  process.argv[2] && process.argv[2].slice(0);
console.log(oldName)

 let newName = process.argv[3] && process.argv[3].slice(0);
 console.log(newName)

// let a=fs.existsSync(path.join(process.cwd(),oldName))
// console.log(a)

if(fs.existsSync(path.join(process.cwd(),oldName))){
   fs.renameSync(oldName,newName); 
}