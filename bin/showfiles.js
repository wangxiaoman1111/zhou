#! /usr/bin/env node

const fs=require('fs')
const path=require("path")
let param=process.argv[2].slice(0);
const url=path.join(process.cwd(),param);
console.log(url)

//判断路径是否存在


 
if(fs.existsSync(url)){
    console.log("是我")
    //判断是不是文件夹
    if(fs.statSync(url).isDirectory()){
         let dirList=fs.readdirSync(url)
        console.log(dirList)
        let targetList=dirList.map(item=>{
            let extname=path.extname(item);
            let size=fs.statSync(path.join(param,item)).size;
            return `${item}-${extname && extname.slice(1)}-${size?size:''}`
        })
        console.log(targetList)
    }else{
        //否则是文件
        console.log(param)
    }
}else{
    console.log('文件不存在')
}

