import { startSub } from './libs/toolbox.js';
import './libs/log.js';
import { MongoClient } from 'mongodb';
import axios from "axios";
import fs from "fs";
import { Logger } from 'winston';

const mClient = new MongoClient(process.env.PAIMONNODE_DB_URI);
let sublist
let nodes = []
let outList = []
//start db and subconverter
let preloadServ = async function(){
    Logger.info("Launching service...")
    //Connect to db
    async function startDB(){
        try{
            await mClient.connect();
            sublist = await mClient.db("paimonnode").collection("sublist");
        }catch(e){
            Logger.error("Cannot connect to the db."+e);
            process.exit(1)
        }
        Logger.info("DB √")
    }
    await startDB()
    try{
        await startSub()//Start subconvert service
    }catch(e){
        Logger.error("Cannot start subconvert service."+e)
        process.exit(1)
    }
    Logger.info("Subconvert √")
}

//fetch nodes
let fetchNodes = async function(){
    Logger.info("Start fetch nodes.")
    let file = fs.readFileSync('../sublist.txt','utf8').split('\n')
    let nodeFromFile = fs.readFileSync('../nodelist.txt','utf-8').split('\n')
    for(let i=0;i<nodeFromFile.length;i++){
        if(nodeFromFile[i] !== ""){
            nodes.push(nodeFromFile[i])
        }
    } 
    let subs = await sublist.find({"PLEASEIGNORE":1}).toArray()
    for(let i=0;i<subs.length;i++){
        file.push(subs[i].link)
    }
    try{
        let res = await axios('https://github.com/WilliamXor/Mux2sub/raw/main/urllist')
        let sourceLst = res.data.split('\n')
        console.log("flist len:"+sourceLst.length)
        for(let i=0;i<sourceLst.length;i++){
            if(sourceLst[i] !== ""){
                file.push(sourceLst[i])
            }
        }
        Logger.info("Black ♂ Magic:Got "+file.length+" ")
    }catch(e){
        Logger.warn("Black ♂ Magic faild."+e)
    }
    /*
    let tsk =[];
    for(let sub of file){
        tsk.push(
            new Promise(async(resolve,rej)=>{
                try{
                    let res = await axios("http://127.0.0.1:25500/sub?target=mixed&remove_emoji=false&url="+encodeURIComponent(sub),{headers:{'User-Agent':'Clash'}})
                    let node = Buffer.from(res.data,'base64').toString('utf8').split('\n')
                    nodes = nodes.concat(node)
                    resolve()
                }catch (e) {
                    Logger.warn("Cannot convert the sub "+sub+" "+e)
                    resolve()
                }
            })
        )
    }*/
    
    for(let i=0;i<file.length;i+=5){
        let taskList = []
        for(let j=0;j<5;j++){
            if(i+j<file.length){
                let sub = file[i+j]
                taskList.push(
                    new Promise(async (res,rej)=>{
                        try{
                            let res = await axios("http://127.0.0.1:25500/sub?target=mixed&remove_emoji=false&url="+encodeURIComponent(sub),{headers:{'User-Agent':'Clash'}})
                            let node = Buffer.from(res.data,'base64').toString('utf8').split('\n')
                            Logger.info("Success fetch "+node.length+" from "+sub)
                            nodes = nodes.concat(node)
                        }catch (e) {
                            //Logger.warn("Cannot convert the sub "+sub+" "+e+e.data)
                        }
                        res()
                    })
                )
            }
        }
        await Promise.all(taskList)
    }
    //await Promise.all(tsk)

}
//output to file in base64
let output = async function(){
    Logger.info("Start output nodes.")
    let output = Buffer.from(nodes.join('\n')).toString('base64')
    fs.writeFileSync('out.txt',output)
    Logger.info("Output √")
    return output
}
async function main(){
    await preloadServ()
    await fetchNodes()
    await output()
    process.exit()
}
main()
